import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

//http:localhost:3000/api/futbolistas/1

//Obtiene solo 1 futbolista
export async function GET(request, { params: { id} }){
    const futbolista = await prisma.futbolistas.findFirst({
        where: {
            id: Number(id)

        }
    })
    if(!futbolista) return NextResponse.json(
        {
            mensaje: 'Futbolista no encontrado'
        },
        {
            status:404
        }
    )
    return NextResponse.json(futbolista)
}
// Eliminar un futbolista por ID
export async function DELETE(request, { params: { id } }) {
    try {
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
        return NextResponse.json(
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
  
  // Actualizar un futbolista por ID de forma completa
export async function PUT(request, { params: { id } }) {
    try {
      const { nombre, posicion, nivel } = await request.json();
  
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
        return NextResponse.json(
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
export async function PATCH(request, { params: { id } }) {
    try {
      const { nombre, posicion, nivel } = await request.json();
  
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
          nombre: nombre || futbolista.nombre,
          posicion: posicion || futbolista.posicion,
          nivel: nivel || futbolista.nivel,
        },
      });
  
      return NextResponse.json(updatedFutbolista);
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json(
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
    