import api from "./api";
import type {
  Categoria,
  CategoriaFormValues,
  FinalidadeCategoria,
} from "../types/categoriaTypes";

const resource = "/categoria";

const finalidadeParaApi: Record<FinalidadeCategoria, number> = {
  despesa: 1,
  receita: 2,
  ambas: 3,
};

function fromApiFinalidade(value: FinalidadeCategoria | number) {
  if (value === 1) {
    return "despesa";
  }

  if (value === 2) {
    return "receita";
  }

  if (value === 3) {
    return "ambas";
  }

  return value;
}

function normalizeCategoria(categoria: Categoria): Categoria {
  return {
    ...categoria,
    finalidade: fromApiFinalidade(categoria.finalidade),
  };
}

export const categoriaService = {
  async list() {
    const response = await api.get<Categoria[]>(resource);
    return response.data.map(normalizeCategoria);
  },

  async create(payload: CategoriaFormValues) {
    const response = await api.post<Categoria>(resource, {
      ...payload,
      finalidade: finalidadeParaApi[payload.finalidade],
    });
    return normalizeCategoria(response.data);
  },

  async update(id: string, payload: CategoriaFormValues) {
    const response = await api.put<Categoria>(`${resource}/${id}`, {
      ...payload,
      finalidade: finalidadeParaApi[payload.finalidade],
    });
    return normalizeCategoria(response.data);
  },

  async remove(id: string) {
    await api.delete(`${resource}/${id}`);
  },
};
