import { LoadingApp, getItem, removeItem, setItem } from "./function";
import { InputField } from "./Filed";
import Row from "./Row";
import Col from "./Col";
import Button from "./Button";
import Card from "./Card";
import PanelContent from "./PanelContent";
import { Menu } from "../themes/sidebar/menu";

const findMenuByPath = (menus: Menu[], path: string): Menu | null => {
  for (const menu of menus) {
    if (menu.path === path) {
      return menu;
    }
    if (menu.children) {
      const found = findMenuByPath(menu.children as Menu[], path); // Paksa tipe menjadi `Menu[]`
      if (found) return found;
    }
  }
  return null;
};

export {
  LoadingApp,
  removeItem,
  setItem,
  findMenuByPath,
  PanelContent,
  Card,
  Button,
  Col,
  Row,
  InputField,
  getItem
};
