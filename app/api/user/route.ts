
import { NextResponse } from "next/server";
export async function GET(){
    try{
        return NextResponse.json({message: "Hello World"})
    } catch(e: any){
        return NextResponse.json({error: "Intrenal Server Error."})
    }
}