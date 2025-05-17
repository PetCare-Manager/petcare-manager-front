import axiosInstance from "@/api/axiosInstance";
import { useAuth } from "@/context/AuthContext"; // Asegúrate de que el path es correcto
import { EditPetData, Pet } from '@/types/types';
import React, { createContext, useContext, useEffect, useState } from "react";

type PetsContextType = {
  pets: Pet[];
  refreshPets: () => Promise<void>;
  addPet: (newPet: Pet) => void;
  editPet: (id: number, body: EditPetData) => Promise<void>;
  deletePet: (id: number) => Promise<void>;
};

const PetsContext = createContext<PetsContextType | undefined>(undefined);

export const PetsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const { isAuthenticated, token } = useAuth();

  const refreshPets = async () => {
    try {
      const res = await axiosInstance.get("/pets");
      setPets(res.data);
    } catch (error) {
      console.error("Error al obtener mascotas", error);
    }
  };

  const addPet = (newPet: Pet) => {
    setPets((prev) => [...prev, newPet]);
  };

  const editPet = async (id: number, body: EditPetData) => {
    try {
      const res = await axiosInstance.patch(`/pets/${id}`, body);
      console.log("Respuesta del backend:", res.data);

      setPets((prev) =>
        prev.map((pet) => (pet.id === id ? { ...pet, ...res.data } : pet))
      );
    } catch (error) {
      console.error("Error al editar mascota:", error);
    }
  };

  const deletePet = async (id: number) => {
    try {
      console.log("Intentando eliminar:", `/pets/${id}`);
      const res = await axiosInstance.delete(`/pets/${id}`);
      console.log("Respuesta del backend:", res.data);
      setPets((prev) => prev.filter((pet) => pet.id !== id));
    } catch (error: any) {
      console.error(
        "Error al eliminar mascota:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    if (isAuthenticated && token) {
      refreshPets();
    }
  }, [isAuthenticated, token]);

  return (
    <PetsContext.Provider value={{ pets, refreshPets, addPet, editPet, deletePet }}>
      {children}
    </PetsContext.Provider>
  );
};

export const usePets = (): PetsContextType => {
  const context = useContext(PetsContext);
  if (!context) throw new Error("usePets debe usarse dentro de PetsProvider");
  return context;
};
