export const data: any = {
    "/newboard/name": {
        progress: 16,
        nextPath: "/newboard/grade",
        question: "Hello there, What's your super cool name?",
        imagePath: "/onboard/name.png"
    },
    "/newboard/grade": {
        progress: 32,
        nextPath: "/newboard/birthday",
        backPath: "/newboard/name",
        question: "Which grade are you in, young explorer?",
        imagePath: "/onboard/grade.png"
    },
    "/newboard/birthday": {
        progress: 48,
        nextPath: "/newboard/mobile",
        backPath: "/newboard/grade",
        question: "that's exciting! When's your special birthday?",
        imagePath: "/onboard/dob.png"
    },
    "/newboard/mobile": {
        progress: 64,
        nextPath: "/newboard/location",
        backPath: "/newboard/birthday",
        question: "Parent's mobile number?",
        imagePath: "/onboard/mobile.png"
    },
    "/newboard/location": {
        progress: 80,
        nextPath: "/newboard/avatar",
        backPath: "/newboard/mobile",
        question: "What's your location!",
        imagePath: "/onboard/location.png"
    },
    "/newboard/avatar": {
        progress: 96,
        backPath: "/newboard/location",
        question: "Choose yout avatar.",
        imagePath: "/onboard/avatar.png"
    }
}

