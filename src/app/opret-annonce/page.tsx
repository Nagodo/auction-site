import "@/style/newlisting.scss";
import Header from "@/components/Header/header";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NewListingForm from "./form/new-listing-form";
import prisma from "@/lib/prisma";

const NewListing = async () => {

    const session = await getServerSession(authConfig);
    

    if (!session) {
        return redirect("/login");
    }

    if (session.user?.email === null) return redirect("/login");

    const user = await prisma.user.findFirst({
        where: {
            email: session.user?.email,
        },
    });

    if (!user?.emailVerified) {
        return redirect("/verify");
    }
  
    return (
        <div className="newlisting bg-zinc-50">
            <Header />

            <div className="content">
                <NewListingForm />
            </div>
        </div>
    )
}

export default NewListing;