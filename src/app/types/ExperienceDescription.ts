import { ProjectDescription } from "./ProjectDescription";

/**
 * Описание опыта работы
 */
export type ExperienceDescription = {

  /**
   * Название компании
   */
  companyName: string,

  /**
   * Дата принятия на работу
   */
  date: string,

  /**
   * Развернут ли блок
   */
  expanded: boolean,

  /**
   * Описание проектов
   */
  projects: ProjectDescription[]
}
