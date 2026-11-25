/** Label for a known moon in the Metenox report picker: "Amamake VII-1". */
export function moon_choice_label(system: string, planet: string, moon: number): string {
    return `${system} ${planet}-${moon}`
}
