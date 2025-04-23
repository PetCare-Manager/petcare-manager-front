import axiosInstance from "@/api/axiosInstance";
import { useAuth } from "@/context/AuthContext"; // Asegúrate de que el path es correcto
import React, { createContext, useContext, useEffect, useState } from "react";

type Pet = {
  id: number;
  name: string;
  breed: string;
  gender: "M" | "F";
  birth: string;
  imageUrl?: string;
};

type PetsContextType = {
  pets: Pet[];
  refreshPets: () => Promise<void>;
  addPet: (newPet: Pet) => void;
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
    // Esperamos a que esté autenticado y haya token para llamar a la API
    if (isAuthenticated && token) {
      refreshPets();
    }
  }, [isAuthenticated, token]); // se ejecuta cuando cambien estas variables

  return (
    <PetsContext.Provider value={{ pets, refreshPets, addPet, deletePet }}>
      {children}
    </PetsContext.Provider>
  );
};

export const usePets = (): PetsContextType => {
  const context = useContext(PetsContext);
  if (!context) throw new Error("usePets debe usarse dentro de PetsProvider");
  return context;
};
