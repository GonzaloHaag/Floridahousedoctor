'use server';

import prisma from "@/lib/prisma";

export const getProfessionalByName = async(name:string) => {
    try {
        
        const plumber = await prisma.plumbers.findFirst({
            where : {
                Name : name
            },
            select : {
                id:true,
                Image_URL:true,
                Name:true,
                Category:true,
                Full_Address:true,
                Rating:true,
                Description:true,
                Phone:true,
                Website:true,
                Instagram:true,
                Facebook:true,
                Twitter:true
            }
        });
        return {
            ok:true,
            plumber:plumber
        }     
    } catch (error) {
        console.log(error);
        return {
            ok:false
        }
    }
}