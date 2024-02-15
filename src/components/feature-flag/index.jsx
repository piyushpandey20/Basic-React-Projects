import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus}/>,
    },
  ];

  function checkEnabledFlags(getCurrKey) {
    return enableFlags.getCurrKey;
  }

  if (loading) return <h1>Loading Data! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
