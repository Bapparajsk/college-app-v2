import { DayTypes } from "@/units/date";
import { Atom, Beaker, BookOpen, BowArrow, Calculator, FlaskConical, LibraryBig, LucideIcon, MessageSquareText, Unplug } from "lucide-react-native";

export type RoutingDetails = {
    subject: string;
    classType?: "Lecture" | "Drawing" | "Lab" | "Workshop"| "game";
    time: { start: number; end: number };
    room?: string;
    teacher?: { sortForm: string; fullName: string };
    topics?: string;
    icon: LucideIcon;
    classTypeIcon: LucideIcon;
    color?: string;
    isExpanded?: boolean
}

export const routingDetails: Record<DayTypes, RoutingDetails[]> = {
    "Monday": [
        {
            subject: "Applied Physics - 1",
            classType: "Lecture",
            time: { start: 10.5, end: 11.5 },
            room: "A-3",
            teacher: { sortForm: "S.P", fullName: "Sujit Pathak" },
            icon: Atom,
            classTypeIcon: BookOpen,
            color: "#F1BA00",
        },
        
        {
            subject: "C.SKILLS in English",
            classType: "Lecture",
            time: { start: 11.5, end: 12.5 },
            room: "A-3",
            teacher: { sortForm: "P.T", fullName: "Priyank Tiwari" },
            icon: MessageSquareText,
            classTypeIcon: BookOpen,
            color: "#C400F7",
        },
        {
            subject: "Library",
            time: { start: 12.5, end: 13.5 },
            icon: LibraryBig,
            classTypeIcon: BookOpen,
            color: "#4F46E5",
        }, 
        {
            subject: "Mathematics - 1",
            classType: "Lecture",
            time: { start: 14, end: 15 },
            room: "A-3",
            teacher: { sortForm: "S.D", fullName: "Subrata Das" },
            icon: Calculator,
            classTypeIcon: BookOpen,
            color: "#4561F9",
        },
        {
            subject: "Applied Chemistry",
            classType: "Lecture",
            time: { start: 15, end: 16 },
            room: "A-3",
            teacher: { sortForm: "R.D", fullName: "Rajdeep Das" },
            icon: FlaskConical,
            classTypeIcon: BookOpen,
            color: "#00D866",
        },
        {
            subject: "C.SKILLS in English",
            classType: "Lecture",
            time: { start: 16, end: 17 },
            room: "A-3",
            teacher: { sortForm: "P.T", fullName: "Priyank Tiwari" },
            classTypeIcon: BookOpen,
            icon: MessageSquareText,
            color: "#C400F7",
        },
    ],
    "Tuesday": [
        {
            subject: "C.SKILLS in English",
            classType: "Lecture",
            time: { start: 10.5, end: 11.5 },
            room: "A-3",
            teacher: { sortForm: "P.T", fullName: "Priyank Tiwari" },
            icon: MessageSquareText,
            classTypeIcon: BookOpen,
            color: "#C400F7",
        },
        {
            subject: "Mathematics - 1",
            classType: "Lecture",
            time: { start: 11.5, end: 12.5 },
            room: "A-3",
            teacher: { sortForm: "S.D", fullName: "Subrata Das" },
            icon: Calculator,
            classTypeIcon: BookOpen,
            color: "#4561F9",
        },
        {
            subject: "Applied Chemistry",
            classType: "Lecture",
            time: { start: 14, end: 17 },
            teacher: { sortForm: "S.L", fullName: "Saifuddin Laskar" },
            icon: FlaskConical,
            classTypeIcon: BookOpen,
            color: "#00D866",
        },
    ],
    "Wednesday": [
        {
            subject: "Applied Chemistry",
            classType: "Lab",
            room: "Lab B-1/2",
            time: { start: 10.5, end: 12.5 },
            teacher: { sortForm: "S.P/R.D", fullName: "Rajdeep Das" },
            icon: Atom,
            classTypeIcon: Beaker,
            color: "#00D866",
        },
        {
            subject: "Applied Physics - 1",
            classType: "Lecture",
            time: { start: 12.5, end: 13.5 },
            room: "A-3",
            teacher: { sortForm: "S.P", fullName: "Sujit Pathak" },
            icon: Atom,
            classTypeIcon: BookOpen,
            color: "#F1BA00",
        },
        {
            subject: "Mathematics - 1",
            classType: "Lecture",
            time: { start: 14, end: 15 },
            room: "A-3",
            teacher: { sortForm: "S.D", fullName: "Subrata Das" },
            icon: Calculator,
            classTypeIcon: BookOpen,
            color: "#4561F9",
        },
        {
            subject: "C.SKILLS in English",
            classType: "Lecture",
            time: { start: 15, end: 16 },
            room: "A-3",
            teacher: { sortForm: "P.T", fullName: "Priyank Tiwari" },
            icon: MessageSquareText,
            classTypeIcon: BookOpen,
            color: "#C400F7",
        },
        {
            subject: "Applied Chemistry",
            classType: "Lecture",
            time: { start: 16, end: 17 },
            room: "A-3",
            teacher: { sortForm: "R.D", fullName: "Rajdeep Das" },
            icon: FlaskConical,
            classTypeIcon: BookOpen,
            color: "#00D866",
        },
    ],
    "Thursday": [
        {
            subject: "C.SKILLS in English",
            classType: "Lab",
            time: { start: 10.5, end: 12.5 },
            teacher: { sortForm: "P.T", fullName: "Priyank Tiwari" },
            icon: MessageSquareText,
            classTypeIcon: Beaker,
            color: "#C400F7",
        },
        {
            subject: "Applied Chemistry",
            classType: "Lecture",
            time: { start: 12.5, end: 13.5 },
            room: "A-3",
            teacher: { sortForm: "R.D", fullName: "Rajdeep Das" },
            icon: FlaskConical,
            classTypeIcon: BookOpen,
            color: "#00D866",
        }, 
        {
            subject: "Mathematics - 1",
            classType: "Lecture",
            time: { start: 14, end: 15 },
            room: "A-3",
            teacher: { sortForm: "S.D", fullName: "Subrata Das" },
            icon: Calculator,
            classTypeIcon: BookOpen,
            color: "#4561F9",
        },
        {
            subject: "Applied Physics - 1",
            classType: "Lecture",
            time: { start: 15, end: 16 },
            room: "A-3",
            teacher: { sortForm: "S.P", fullName: "Sujit Pathak" },
            icon: Atom,
            classTypeIcon: BookOpen,
            color: "#F1BA00",
        },
        {
            subject: "Sports & Yoga",
            classType: "game",
            time: { start: 16, end: 17 },
            room: "A-3",
            teacher: { sortForm: "P.T", fullName: "Priyank Tiwari" },
            icon: BowArrow,
            classTypeIcon: BowArrow,
            color: "#4F46E5",
        },
    ],
    "Friday": [
        {
            subject: "Engineering Workshop",
            classType: "Workshop",
            time: { start: 10.5, end: 13.5 },
            room: "A-3",
            teacher: { sortForm: "M.M+S.R+R.P", fullName: "M.M+S.R+R.P" }, // moumita mallick, sumeswar ram, ranjit panday
            icon: Unplug,
            classTypeIcon: Unplug,
            color: "#4F46E5",
        },
        {
            subject: "Applied Physics - 1",
            classType: "Lab",
            time: { start: 14, end: 16 },
            room: "Lab B-1/2",
            teacher: { sortForm: "S.P", fullName: "Sujit Pathak" },
            icon: Atom,
            classTypeIcon: BookOpen,
            color: "#F1BA00",
        },
        {
            subject: "Applied Physics - 1",
            classType: "Lecture",
            time: { start: 16, end: 17 },
            room: "A-3",
            teacher: { sortForm: "S.P", fullName: "Sujit Pathak" },
            icon: Atom,
            classTypeIcon: BookOpen,
            color: "#F1BA00",
        },
    ]
} as Record<DayTypes, RoutingDetails[]>;


export const getTodaysRoutine = (d?: DayTypes | null) => {
    if(d) return routingDetails[d] || [];

    const days: DayTypes[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayName = days[today.getDay()] as DayTypes;

    if (dayName === "Saturday" || dayName === "Sunday") {
        return [];
    }

    return routingDetails[dayName] || [];
}