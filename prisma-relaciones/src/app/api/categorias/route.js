import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// get categorias
export async function GET(){
    const categorias = await prisma.categoria.findMany()
    return NextResponse.json(categorias)
}

export async function POST(request){
    const {nombre} = await request.json()
    const nuevaCategoria = await prisma.categoria.create({
        data:{
            nombre
        }
    })
    return NextResponse.json(nuevaCategoria)
}
export async function PUT(request) {
    const { id, nombre } = await request.json();
  
    try {
      const categoria = await prisma.categoria.update({
        where: { id }, // Id de la categoría a actualizar
        data: {
          nombre
        }
      });
      return NextResponse.json(categoria);
    } catch (error) {
      return NextResponse.error("Error al actualizar la categoría", 500);
    }
  }
  export async function DELETE(request) {
    const { id } = await request.json();
  
    try {
      const deletedCategoria = await prisma.categoria.delete({
        where: { id }, // Id de la categoría a eliminar
      });
      return NextResponse.json(deletedCategoria);
    } catch (error) {
      return NextResponse.error("Error al eliminar la categoría", 500);
    }
  }