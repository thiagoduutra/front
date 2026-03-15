import api from "./api";
import type { Pessoa, PessoaFormValues } from "../types/pessoaTypes";

const resource = "/pessoa";

export const pessoaService = {
  async list() {
    const response = await api.get<Pessoa[]>(resource);
    return response.data;
  },

  async create(payload: PessoaFormValues) {
    const response = await api.post<Pessoa>(resource, payload);
    return response.data;
  },

  async update(id: string, payload: PessoaFormValues) {
    const response = await api.put<Pessoa>(`${resource}/${id}`, payload);
    return response.data;
  },

  async remove(id: string) {
    await api.delete(`${resource}/${id}`);
  },
};
