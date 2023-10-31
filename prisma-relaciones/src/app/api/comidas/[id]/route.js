import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// get 1 comida
export async function GET(request, {params:{id}}){
    console.log(id)
    console.log(id)
    const comidas = await prisma.comidas.findFirst(
        {
            where: {id},
            include: {categoria: true}
        }
    )
    if(!comidas) return NextResponse.json({mensaje: "comida no encontrada"},{status: 404})
    return NextResponse.json(comidas)
}

export async function DELETE(request, {params:{id}}){
    const comidas = await prisma.comidas.delete(
        {
            where: {id},
        }
    )
    return NextResponse.json(comidas)
}

export async function PUT(request, {params:{id}}){
    const {nombre, ingredientes} = await request.json()
    const comidas = await prisma.comidas.update(
        {
            where: {id},
            data: {
                nombre, ingredientes
            }
        }
    )
    return NextResponse.json(comidas)
}