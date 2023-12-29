import { NextRequest, NextResponse } from "next/server";
import { Responses } from "@/static/Responses";

export async function POST(request : NextRequest) {
    try {
        const { message } = await request.json();
        const words = message.toLowerCase().split(/\s+/);
        let res;
        for (const word of words) {
            res = Object.keys(Responses).find(key =>
                key.toLowerCase().includes(word)
            );
            if (res) {
                break;
            }
        }
        if(!res) res = "not_found";
        return NextResponse.json( { message: Responses[res] } , {status: 201} );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}