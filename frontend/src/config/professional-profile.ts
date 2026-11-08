export interface ProfessionalProfile {
  name: string;
  introduction: string;
  skills: readonly string[];
  experience: readonly string[];
  education: readonly string[];
}

export const professionalProfile: ProfessionalProfile = {
  name: "Antônio Marcos",
  introduction:
    "Sou Antônio Marcos, desenvolvedor de software independente. AMSAF é minha identidade profissional.",
  skills: [],
  experience: [],
  education: [],
};
