import { getServerSession, NextAuthOptions, User } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { comparePassword } from "./encryption";

import prisma from "./prisma";

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }

                if (credentials.password.length < 8) {
                    return null;
                }

                const dbUser = await prisma.user.findFirst({
                    where: {
                        email: credentials.email,
                    },
                });

                if (dbUser?.password === null) return null;

                if (dbUser && comparePassword(credentials.password, dbUser.password)) {
                    const { password, createdAt, updatedAt, ...dbUserWithoutPassword } = dbUser;
                    return { ...dbUserWithoutPassword, id: dbUserWithoutPassword.id.toString() } as User;
                }

                return null;
            },

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async signIn({user, account, email}) {

            if (account === null) return true;

            if (account.provider === "google") {

                const existingUser = await prisma.user.findUnique({
                    where: {
                        email: user.email as string,
                    },
                });

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            email: user.email as string,
                            name: user.name as string,
                        },
                    });
                }
            } else {
                user.image = "/images/testimage1.jpg";
            }

            return true;
        },

        async jwt({token, user, trigger, session}) {
            if (trigger === 'update') {
               return {
                  ...token,
                  ...session.user
                };
            }
             
            if (user) {
               token = {
                  ...token,
                  ...user
               };
            }
             
            return token;
         },

    }
}
