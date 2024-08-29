"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



const Seed = () => {
    
    async function run() {

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/seed`, {
                method: 'GET'
            });

        } catch (error) {
            console.error(error);
        }

        return null;
    }

    useEffect(() => {
        async function get() {
            await run();
          
        }
      
        get();
    }, []); 

  
    return (
        <div className="profile-action">
           
        </div>
    )
}

export default Seed;