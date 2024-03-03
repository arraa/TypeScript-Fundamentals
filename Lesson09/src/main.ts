//utility Types

//partial

interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign;
};

const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true,
};

// assignVerified.grade = 10 // ini ga bisa krna assignverified itu udh di set sebagai readonly
// recordAssignment(assignGraded) //ini ga bisa juga krna butuh verifed nya

recordAssignment({ ...assignGraded, verified: true });

// Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U",
    // Salem: "Z", //ini ga bisa krna dia pakai string literal
};

interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit

type data = "studentId" | "grade";

type AssignResult = Pick<Assignment, data>;

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
};

type grade = "grade" | "title";

type AssignPreview = Omit<Assignment, grade>;

const preview: AssignPreview = {
    studentId: "k123",
    // title: "Final Project",
    verified: true,
};


// Exclude and Extract 

type adjustedGrade = Exclude<LetterGrades, "A">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable 

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>


// ReturnType 

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters 

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
