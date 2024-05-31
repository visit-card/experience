import { Component } from '@angular/core';

import { ExperienceDescription } from "./types/ExperienceDescription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  experience: ExperienceDescription[] = [
    {
      companyName: "ООО \"СИСТЕМА\"",
      date: "20 Мая 2016",
      expanded: true,
      projects: [
        {
          description: "Проект \"Песочница\". В песочницу был направлен датчик глубины и проектор. Я писал простые и интерактивные игры для детей.",
          skills: ["C++", "OpenGL"]
        }
      ]
    },
    {
      companyName: "Перевод в ООО \"МОНЕТА\"",
      date: "01 Августа 2017",
      expanded: false,
      projects: [
        {
          description: "Проект \"Песочница\". Продолжил работу над песочницей.",
          skills: ["C++", "OpenGL"]
        },
        {
          description: "Проект \"Картомат\". Автомат для выдачи, хранения и учета банковских карт. Я написал драйвера для работы с термопринтером. Дополнительно устранял баги.",
          skills: ["C#", "Prism"]
        }
      ]
    },
    {
      companyName: "АРМИЯ",
      date: "28 Июня 2018",
      expanded: false,
      projects: [
        {
          description: "Срочная служба в армии",
          skills: []
        }
      ]
    },
    {
      companyName: "Испытательный период в ООО \"ВИСКУР\"",
      date: "03 Сентября 2019",
      expanded: false,
      projects: [
        {
          description: "Проект \"IP Камера\". Захват изображений с двух камер и аудио с микрофона для последующей записи на диск, а так же стрим в RTSP и RTMP. Написание админки для управлением устройством.",
          skills: ["C++", "Gstreamer", "Angular"]
        }
      ]
    },
    {
      companyName: "ООО \"ВИСКУР\"",
      date: "01 Март 2020",
      expanded: false,
      projects: [
        {
          description: "Проект \"TimeFlip\". Это небольшой кубик для трекинга времени на каждую грань которого назначалась задача.",
          skills: ["Kotlin", "Spring Boot", "PostgreSQL", "Angular"]
        },
        {
          description: "Проект \"IP Камера\". Перевод web-стриминга в формат WebRTC. Исправление багов.",
          skills: ["C++", "Gstreamer", "Angular"]
        },
        {
          description: "Проект \"The Bot\". Телеграм бот - агрегатор фриланс бирж.",
          skills: ["Kotlin", "Spring Boot", "PostgreSQL", "Jooq"]
        },
        {
          description: "Проект \"Санкур\". Система учета и выдачи путевок в санатории для сотрудников.",
          skills: ["Kotlin", "Spring Boot", "PostgreSQL", "Angular"]
        },
        {
          description: "Проект \"Предсменный осмотр\". Устройство для проверки состояния здоровья человека перед допуском к работе.",
          skills: ["Kotlin", "JavaFX", "Docker", "PostgreSQL"]
        },
        {
          description: "Проект \"Торжок\". Система учета и контроля производства масел на заводе.",
          skills: ["Kotlin", "Spring Boot", "PostgreSQL", "Angular"]
        }
      ]
    },
    {
      companyName: "ПЭТ ПРОЕКТ \"СМУТА\"",
      date: "20 Октябрь 2023",
      expanded: false,
      projects: [
        {
          description: "2 чат бота для телеграмма и вк реализующие игровую логику",
          skills: ["Kotlin", "Spring Boot", "PostgreSQL", "Docker"]
        }
      ]
    }
  ]
}
