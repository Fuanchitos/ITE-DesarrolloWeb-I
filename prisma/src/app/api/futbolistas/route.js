import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

//http://localhost:3000/api/futbolistas
//Regresa la lista de futbolistas
export async function GET(){
    try{
        const futbolistas = await prisma.futbolistas.findMany()

        return NextResponse.json(futbolistas)
    }catch (error) {
        if(error instanceof Error){
            return NextRequest.json(
                {
                    mensaje: 'Hubo un error'
                },
                {
                    status:500
                }
            )
        }
    }
   
}
//Crea un nuevo futbolista
export async function  POST(request){
   try {
    const {nombre,posicion,nivel} = await request.json()

    const nuevoFutbolista = await prisma.futbolistas.create({
        data: {
            nombre: nombre,
            posicion: posicion,
            nivel: nivel
        }
    })

    return NextResponse.json(nuevoFutbolista)
   } catch (error) {
    if(error instanceof Error){
        return NextRequest.json(
            {
                mensaje: 'Hubo un error'
            },
            {
                status:500
            }
        )
    }
   }
}
// Eliminar un futbolista por ID
export async function DELETE(request) {
    try {
      const { id } = await request.json();
  
      const futbolista = await prisma.futbolistas.findFirst({
        where: {
          id: Number(id),
        },
      });
  
      if (!futbolista) {
        return NextResponse.json(
          {
            mensaje: 'Futbolista no encontrado',
          },
          {
            status: 404,
          }
        );
      }
  
      await prisma.futbolistas.delete({
        where: {
          id: Number(id),
        },
      });
  
      return NextResponse.json({ mensaje: 'Futbolista eliminado con éxito' });
    } catch (error) {
      if (error instanceof Error) {
        return NextRequest.json(
          {
            mensaje: 'Hubo un error al eliminar el futbolista',
          },
          {
            status: 500,
          }
        );
      }
    }
  }
  // Actualizar un futbolista por ID
export async function PUT(request) {
    try {
      const { id, nombre, posicion, nivel } = await request.json();
  
      const futbolista = await prisma.futbolistas.findFirst({
        where: {
          id: Number(id),
        },
      });
  
      if (!futbolista) {
        return NextResponse.json(
          {
            mensaje: 'Futbolista no encontrado',
          },
          {
            status: 404,
          }
        );
      }
  
      const updatedFutbolista = await prisma.futbolistas.update({
        where: {
          id: Number(id),
        },
        data: {
          nombre: nombre,
          posicion: posicion,
          nivel: nivel,
        },
      });
  
      return NextResponse.json(updatedFutbolista);
    } catch (error) {
      if (error instanceof Error) {
        return NextRequest.json(
          {
            mensaje: 'Hubo un error al actualizar el futbolista',
          },
          {
            status: 500,
          }
        );
      }
    }
  }
  
  // Actualizar un futbolista por ID de forma parcial
export async function PATCH(request) {
    try {
      const { id, nombre, posicion, nivel } = await request.json();
  
      const futbolista = await prisma.futbolistas.findFirst({
        where: {
          id: Number(id),
        },
      });
  
      if (!futbolista) {
        return NextResponse.json(
          {
            mensaje: 'Futbolista no encontrado',
          },
          {
            status: 404,
          }
        );
      }
  
      const updatedFutbolista = await prisma.futbolistas.update({
        where: {
          id: Number(id),
        },
        data: {
          nombre: nombre || futbolista.nombre, // Mantener el valor original si no se proporciona uno nuevo
          posicion: posicion || futbolista.posicion, // Mantener el valor original si no se proporciona uno nuevo
          nivel: nivel || futbolista.nivel, // Mantener el valor original si no se proporciona uno nuevo
        },
      });
  
      return NextResponse.json(updatedFutbolista);
    } catch (error) {
      if (error instanceof Error) {
        return NextRequest.json(
          {
            mensaje: 'Hubo un error al actualizar el futbolista',
          },
          {
            status: 500,
          }
        );
      }
    }
  }
  