import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(){
    const comidas = await prisma.comidas.findMany(
        {
            include: {categoria: true}
        }
    )
    return NextResponse.json(comidas)
}

export async function POST(request){
    const {nombre, ingredientes, categoriaId} = await request.json()
    const nuevaComida = await prisma.comidas.create({
        data:{
            nombre,
            ingredientes,
            categoriaId
        }
    })
    return NextResponse.json(nuevaComida)
}

export async function PUT(request) {
    const { id, nombre, ingredientes, categoriaId } = await request.json();
  
    try {
      const comida = await prisma.comidas.update({
        where: { id }, // Id de la comida a actualizar
        data: {
          nombre,
          ingredientes,
          categoriaId
        }
      });
      return NextResponse.json(comida);
    } catch (error) {
      return NextResponse.error("Error al actualizar la comida", 500);
    }
  }

  export async function DELETE(request) {
    const { id } = await request.json();
  
    try {
      const deletedComida = await prisma.comidas.delete({
        where: { id }, // Id de la comida a eliminar
      });
      return NextResponse.json(deletedComida);
    } catch (error) {
      return NextResponse.error("Error al eliminar la comida", 500);
    }
  }