"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {
  formattedTopics: { text: string; value: number }[];
};

const defaultFormattedTopics  = [
  {
    text: 'Biology',
    value: 12
  },
  {
    text: 'Maths',
    value: 6
  },
  {
    text: 'Nigeria History',
    value: 10
  },
  {
    text: 'Literature',
    value: 16
  },
  {
    text: 'Chemistry',
    value: 15
  },
  {
    text: 'English Premier League',
    value: 13
  },
  {
    text: 'Sports',
    value: 16
  },
]
const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const WordCloud = ({ formattedTopics }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
      <D3WordCloud
        data={formattedTopics.length > 0 ? formattedTopics: defaultFormattedTopics}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        onWordClick={(e: any, d: { text: string; }) => {
          router.push("/quiz?topic=" + d.text);
        }}
      />
  );
};

export default WordCloud;