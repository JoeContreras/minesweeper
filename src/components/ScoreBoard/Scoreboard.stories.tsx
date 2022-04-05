import React from "react";
import { Story, Meta } from "@storybook/react";
import Scoreboard, { ScoreBoardProps } from "./Scoreboard";

export default {
  title: "scoreBoard/Scoreboard",
  component: Scoreboard,
} as Meta;

const Template: Story<ScoreBoardProps> = (args) => <Scoreboard {...args} />;

export const ScoreboardExample = Template.bind({});
ScoreboardExample.args = {
  time: "000",
  levels: ["beginner", "intermediate", "expert"],
  mines: "010",
};
