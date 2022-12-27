import { TutorialData } from "@/components/tutorial";

export default function getTutorial(id: string): TutorialData | null {
  try {
    return require(`./${id}`) ?? null;
  } catch {
    return null;
  }
}
