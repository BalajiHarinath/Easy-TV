import { v4 as uuid } from "uuid";

export const SidebarNavData = [
  {
    _id: uuid(),
    name: "Home",
    icon: "home",
    link: "/",
  },

  {
    _id: uuid(),
    name: "Videos",
    icon: "play_circle_filled",
    link: "/videos",
  },

  {
    _id: uuid(),
    name: "Playlist",
    icon: "queue",
    link: "./",
  },

  {
    _id: uuid(),
    name: "Liked",
    icon: "favorite",
    link: "./",
  },

  {
    _id: uuid(),
    name: "Watch Later",
    icon: "watch_later",
    link: "./",
  },

  {
    _id: uuid(),
    name: "History",
    icon: "history",
    link: "./",
  },
];
