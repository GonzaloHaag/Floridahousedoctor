'use server';

import prisma from "@/lib/prisma";

export const getPlumbers = async () => {
    try {
        const plumbers = await prisma.plumbers.findMany({
            select : {
                id:true,
                Image_URL:true,
                Name:true,
                Phone:true,
                Full_Address:true,
                Rating:true,
                Category:true
            }
        });

        return {
            ok:true,
            plumbers:plumbers
        }
    } catch (error) {
        console.log(error);
        return {
            ok:false
        }
    }
}