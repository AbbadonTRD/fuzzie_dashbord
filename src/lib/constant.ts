import { Home, Logs, Settings } from "lucide-react";
import Workflows from "@/icons/workflows";
import Category from "@/icons/category";
import Payment from "@/icons/payment";
import Templates from "@/icons/cloud_download";
import { Connection } from "./types";
import BarChart from "@/components/plura/icons/bar_chart";
import Calendar from "@/components/plura/icons/calendar";
import CheckCircle from "@/components/plura/icons/check_circled";
import Chip from "@/components/plura/icons/chip";
import ClipboardIcon from "@/components/plura/icons/clipboardIcon";
import Compass from "@/components/plura/icons/compass";
import Database from "@/components/plura/icons/database";
import Flag from "@/components/plura/icons/flag";
import Headphone from "@/components/plura/icons/headphone";

import Info from "@/components/plura/icons/info";
import LinkIcon from "@/components/plura/icons/link";
import Lock from "@/components/plura/icons/lock";
import Message from "@/components/plura/icons/messages";
import Notification from "@/components/plura/icons/notification";

import Person from "@/components/plura/icons/person";
import Pipelines from "@/components/plura/icons/pipelines";
import PluraCategory from "@/components/plura/icons/plura-category";
import Power from "@/components/plura/icons/power";
import Receipt from "@/components/plura/icons/receipt";
import Send from "@/components/plura/icons/send";

import Shield from "@/components/plura/icons/shield";
import Star from "@/components/plura/icons/star";
import Tune from "@/components/plura/icons/tune";
import Video from "@/components/plura/icons/video_recorder";
import Wallet from "@/components/plura/icons/wallet";
import Warning from "@/components/plura/icons/warning";

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const pricingCards = [
  {
    title: "Starter",
    description: "Perfect for trying out plura",
    price: "Free",
    duration: "",
    highlight: "Key features",
    features: ["3 Sub accounts", "2 Team members", "Unlimited pipelines"],
    priceId: "",
  },
  {
    title: "Unlimited Saas",
    description: "The ultimate agency kit",
    price: "$199",
    duration: "month",
    highlight: "Key features",
    features: ["Rebilling", "24/7 Support team"],
    priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
  },
  {
    title: "Basic",
    description: "For serious agency owners",
    price: "$49",
    duration: "month",
    highlight: "Everything in Starter, plus",
    features: ["Unlimited Sub accounts", "Unlimited Team members"],
    priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
  },
];
export const products = [
  {
    title: "Starnite",
    link: "/image 4.png",
    thumbnail: "/image 4.png",
  },
  {
    title: "Starnite",
    link: "/1 1.png",
    thumbnail: "/1 1.png",
  },
  {
    title: "Starnite",
    link: "/Design ohne Titel (5) 1.png",
    thumbnail: "/Design ohne Titel (5) 1.png",
  },
  {
    title: "Starnite",
    link: "/appBanner.png",
    thumbnail: "/appBanner.png",
  },
  {
    title: "Starnite",
    link: "/image 4.png",
    thumbnail: "/image 4.png",
  },
  {
    title: "Starnite",
    link: "/1 1.png",
    thumbnail: "/1 1.png",
  },
  {
    title: "Starnite",
    link: "/Design ohne Titel (5) 1.png",
    thumbnail: "/Design ohne Titel (5) 1.png",
  },
  {
    title: "Starnite",
    link: "/appBanner.png",
    thumbnail: "/appBanner.png",
  },
  {
    title: "Starnite",
    link: "/image 4.png",
    thumbnail: "/image 4.png",
  },
  {
    title: "Starnite",
    link: "/1 1.png",
    thumbnail: "/1 1.png",
  },
  {
    title: "Starnite",
    link: "/Design ohne Titel (5) 1.png",
    thumbnail: "/Design ohne Titel (5) 1.png",
  },
  {
    title: "Starnite",
    link: "/appBanner.png",
    thumbnail: "/appBanner.png",
  },
  {
    title: "Starnite",
    link: "/image 4.png",
    thumbnail: "/image 4.png",
  },
  {
    title: "Starnite",
    link: "/1 1.png",
    thumbnail: "/1 1.png",
  },
  {
    title: "Starnite",
    link: "/Design ohne Titel (5) 1.png",
    thumbnail: "/Design ohne Titel (5) 1.png",
  },
  {
    title: "Starnite",
    link: "/appBanner.png",
    thumbnail: "/appBanner.png",
  },
  {
    title: "Starnite",
    link: "/image 4.png",
    thumbnail: "/image 4.png",
  },
  {
    title: "Starnite",
    link: "/1 1.png",
    thumbnail: "/1 1.png",
  },
  {
    title: "Starnite",
    link: "/Design ohne Titel (5) 1.png",
    thumbnail: "/Design ohne Titel (5) 1.png",
  },
  {
    title: "Starnite",
    link: "/appBanner.png",
    thumbnail: "/appBanner.png",
  },
  // {
  //   title: 'Moonbeam',
  //   link: 'https://gomoonbeam.com',
  //   thumbnail: '/p1.png',
  // },
  // {
  //   title: 'Cursor',
  //   link: 'https://cursor.so',
  //   thumbnail: '/p2.png',
  // },
  // {
  //   title: 'Rogue',
  //   link: 'https://userogue.com',
  //   thumbnail: '/p3.png',
  // },
  // {
  //   title: 'Editorially',
  //   link: 'https://editorially.org',
  //   thumbnail: '/p4.png',
  // },
  // {
  //   title: 'Editrix AI',
  //   link: 'https://editrix.ai',
  //   thumbnail: '/p5.png',
  // },
  // {
  //   title: 'Pixel Perfect',
  //   link: 'https://app.pixelperfect.quest',
  //   thumbnail: '/p6.png',
  // },
  // {
  //   title: 'Algochurn',
  //   link: 'https://algochurn.com',
  //   thumbnail: '/p1.png',
  // },
  // {
  //   title: 'Aceternity UI',
  //   link: 'https://ui.aceternity.com',
  //   thumbnail: '/p2.png',
  // },
  // {
  //   title: 'Tailwind Master Kit',
  //   link: 'https://tailwindmasterkit.com',
  //   thumbnail: '/p3.png',
  // },
  // {
  //   title: 'SmartBridge',
  //   link: 'https://smartbridgetech.com',
  //   thumbnail: '/p4.png',
  // },
  // {
  //   title: 'Renderwork Studio',
  //   link: 'https://renderwork.studio',
  //   thumbnail: '/p5.png',
  // },
  // {
  //   title: 'Creme Digital',
  //   link: 'https://cremedigital.com',
  //   thumbnail: '/p6.png',
  // },
  // {
  //   title: 'Golden Bells Academy',
  //   link: 'https://goldenbellsacademy.com',
  //   thumbnail: '/p1.png',
  // },
  // {
  //   title: 'Invoker Labs',
  //   link: 'https://invoker.lol',
  //   thumbnail: '/p2.png',
  // },
  // {
  //   title: 'E Free Invoice',
  //   link: 'https://efreeinvoice.com',
  //   thumbnail: '/p3.png',
  // },
];

export const menuOptions = [
  { name: "Dashboard", Component: Home, href: "/fuzzie/dashboard" },
  { name: "Workflows", Component: Workflows, href: "/fuzzie/workflows" },
  { name: "Settings", Component: Settings, href: "/fuzzie/settings" },
  { name: "Connections", Component: Category, href: "/fuzzie/connections" },
  { name: "Billing", Component: Payment, href: "/fuzzie/billing" },
  { name: "Templates", Component: Templates, href: "/fuzzie/templates" },
  { name: "Logs", Component: Logs, href: "/logs" },
];

export const EditorCanvasDefaultCardTypes = {
  Email: { description: "Send and email to a user", type: "Action" },
  Condition: {
    description: "Boolean operator that creates different conditions lanes.",
    type: "Action",
  },
  AI: {
    description:
      "Use the power of AI to summarize, respond, create and much more.",
    type: "Action",
  },
  Slack: { description: "Send a notification to slack", type: "Action" },
  "Google Drive": {
    description:
      "Connect with Google drive to trigger actions or to create files and folders.",
    type: "Trigger",
  },
  Notion: { description: "Create entries directly in notion.", type: "Action" },
  "Custom Webhook": {
    description:
      "Connect any app that has an API key and send data to your applicaiton.",
    type: "Action",
  },
  Discord: {
    description: "Post messages to your discord server",
    type: "Action",
  },
  "Google Calendar": {
    description: "Create a calendar invite.",
    type: "Action",
  },
  Trigger: {
    description: "An event that starts the workflow.",
    type: "Trigger",
  },
  Action: {
    description: "An event that happens after the workflow begins",
    type: "Action",
  },
  Wait: {
    description: "Delay the next action step by using the wait timer.",
    type: "Action",
  },
};

export const CONNECTIONS: Connection[] = [
  {
    title: "Google Drive",
    description: "Connect your google drive to listen to folder changes",
    image: "/googleDrive.png",
    connectionKey: "googleNode",
    alwaysTrue: true,
  },
  {
    title: "Discord",
    description: "Connect your discord to send notification and messages",
    image: "/discord.png",
    connectionKey: "discordNode",
    accessTokenKey: "webhookURL",
  },
  {
    title: "Notion",
    description: "Create entries in your notion dashboard and automate tasks.",
    image: "/notion.png",
    connectionKey: "notionNode",
    accessTokenKey: "accessToken",
  },
  {
    title: "Slack",
    description:
      "Use slack to send notifications to team members through your own custom bot.",
    image: "/slack.png",
    connectionKey: "slackNode",
    accessTokenKey: "slackAccessToken",
    slackSpecial: true,
  },
];

export const pricingCard = [
  {
    title: "Starter",
    description: "Perfect for trying out plura",
    price: "Free",
    duration: "",
    highlight: "Key features",
    features: ["3 Sub accounts", "2 Team members", "Unlimited pipelines"],
    priceId: "",
  },
  {
    title: "Unlimited Saas",
    description: "The ultimate agency kit",
    price: "$199",
    duration: "month",
    highlight: "Key features",
    features: ["Rebilling", "24/7 Support team"],
    priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
  },
  {
    title: "Basic",
    description: "For serious agency owners",
    price: "$49",
    duration: "month",
    highlight: "Everything in Starter, plus",
    features: ["Unlimited Sub accounts", "Unlimited Team members"],
    priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
  },
];

export const addOnProducts = [
  { title: "Priority Support", id: "prod_PNjJAE2EpP16pn" },
];

export const icons = [
  {
    value: "chart",
    label: "Bar Chart",
    path: BarChart,
  },
  {
    value: "headphone",
    label: "Headphones",
    path: Headphone,
  },
  {
    value: "send",
    label: "Send",
    path: Send,
  },
  {
    value: "pipelines",
    label: "Pipelines",
    path: Pipelines,
  },
  {
    value: "calendar",
    label: "Calendar",
    path: Calendar,
  },
  {
    value: "settings",
    label: "Settings",
    path: Settings,
  },
  {
    value: "check",
    label: "Check Circled",
    path: CheckCircle,
  },
  {
    value: "chip",
    label: "Chip",
    path: Chip,
  },
  {
    value: "compass",
    label: "Compass",
    path: Compass,
  },
  {
    value: "database",
    label: "Database",
    path: Database,
  },
  {
    value: "flag",
    label: "Flag",
    path: Flag,
  },
  {
    value: "home",
    label: "Home",
    path: Home,
  },
  {
    value: "info",
    label: "Info",
    path: Info,
  },
  {
    value: "link",
    label: "Link",
    path: LinkIcon,
  },
  {
    value: "lock",
    label: "Lock",
    path: Lock,
  },
  {
    value: "messages",
    label: "Messages",
    path: Message,
  },
  {
    value: "notification",
    label: "Notification",
    path: Notification,
  },
  {
    value: "payment",
    label: "Payment",
    path: Payment,
  },
  {
    value: "power",
    label: "Power",
    path: Power,
  },
  {
    value: "receipt",
    label: "Receipt",
    path: Receipt,
  },
  {
    value: "shield",
    label: "Shield",
    path: Shield,
  },
  {
    value: "star",
    label: "Star",
    path: Star,
  },
  {
    value: "tune",
    label: "Tune",
    path: Tune,
  },
  {
    value: "videorecorder",
    label: "Video Recorder",
    path: Video,
  },
  {
    value: "wallet",
    label: "Wallet",
    path: Wallet,
  },
  {
    value: "warning",
    label: "Warning",
    path: Warning,
  },
  {
    value: "person",
    label: "Person",
    path: Person,
  },
  {
    value: "category",
    label: "Category",
    path: PluraCategory,
  },
  {
    value: "clipboardIcon",
    label: "Clipboard Icon",
    path: ClipboardIcon,
  },
];

export type EditorBtns =
  | "text"
  | "container"
  | "section"
  | "contactForm"
  | "paymentForm"
  | "link"
  | "2Col"
  | "video"
  | "__body"
  | "image"
  | null
  | "3Col";

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: "center",
  objectFit: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "left",
  opacity: "100%",
};
