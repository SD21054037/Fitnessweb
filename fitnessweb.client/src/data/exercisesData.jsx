const exercises = [
    {
        name: "Barbell Squat",
        intro: "A fundamental lower-body exercise that targets strength, coordination, and mobility.",
        muscles: {
            primary: ["Quadriceps", "Glutes"],
            secondary: ["Hamstrings", "Spinal erectors", "Core"]
        },
        reason: "The squat is one of the most effective movements for building total leg strength and core stability. It mimics daily movements like sitting and standing, making it a must-have in any training program.",
        execution: "Stand with your feet shoulder-width apart and barbell resting on your traps. Keep your chest up and back straight as you lower your hips back and down. Push through your heels to return to standing.",
        warmup: "Do 5–10 minutes of light cardio, then dynamic stretches for the hips and ankles, followed by bodyweight squats and glute activation (e.g., banded bridges).",
        programming: "Great for leg days or full-body routines. Start with 3–5 sets of 5–10 reps. Rest 1–3 minutes between sets depending on intensity."
    },
    {
        name: "Barbell Bench Press",
        intro: "A classic compound exercise for upper body strength, especially the chest and triceps.",
        muscles: {
            primary: ["Pectorals"],
            secondary: ["Triceps", "Front delts"]
        },
        reason: "The bench press is ideal for building pushing power and upper body muscle mass. It's also a key strength benchmark in many programs.",
        execution: "Lie flat on a bench with the barbell above your chest. Lower the bar with control until it touches your sternum, then press it back up without locking out your elbows completely.",
        warmup: "5 minutes of arm circles and shoulder mobility, light dumbbell presses, and a few warm-up sets with just the bar.",
        programming: "Works well in push or upper body days. 3–4 sets of 6–10 reps is effective for strength and hypertrophy."
    },
    {
        name: "Pull-Up",
        intro: "A bodyweight compound exercise for upper back and arm strength.",
        muscles: {
            primary: ["Latissimus dorsi", "Biceps"],
            secondary: ["Rhomboids", "Rear delts", "Forearms"]
        },
        reason: "Pull-ups build back thickness and grip strength, and improve body control. They're essential for calisthenics and overall pulling strength.",
        execution: "Hang from a pull-up bar with a shoulder-width grip. Pull your chest up toward the bar, squeezing your back at the top. Lower yourself with control.",
        warmup: "Shoulder mobility drills, scapular pull-ups, and resistance band rows to activate the lats and rear delts.",
        programming: "Use in pull days or back-focused sessions. Perform 3–4 sets of max reps or assisted reps. For strength, add weight and aim for 5–8 reps."
    },
    {
        name: "Bicep Curl",
        intro: "A classic isolation exercise focused on building biceps strength and size.",
        muscles: {
            primary: ["Biceps brachii"],
            secondary: ["Brachialis"]
        },
        reason: "Bicep curls allow focused tension on the biceps, ideal for muscle hypertrophy and aesthetic arm development.",
        execution: "Hold dumbbells with palms facing up. Curl the weights by bending your elbows while keeping your upper arms still. Lower slowly.",
        warmup: "Light dumbbell curls and forearm rotations to prep elbow joints and activate the biceps.",
        programming: "Perform 3–4 sets of 10–15 reps. Great at the end of upper-body or arm-focused workouts."
    },
    {
        name: "Tricep Pushdown",
        intro: "An effective isolation movement targeting the triceps using a cable machine.",
        muscles: {
            primary: ["Triceps brachii"],
            secondary: []
        },
        reason: "Tricep pushdowns provide constant resistance and help build strong, defined arms while minimizing strain on the shoulders.",
        execution: "Grab a cable bar with elbows close to your sides. Push the bar down until your arms are fully extended, then return slowly.",
        warmup: "Band pushdowns or light dumbbell kickbacks to engage the triceps.",
        programming: "Use for 3–4 sets of 12–15 reps. Ideal at the end of push or arm workouts."
    },
    {
        name: "Lateral Raise",
        intro: "An isolation exercise to build the lateral deltoid for wider shoulders.",
        muscles: {
            primary: ["Side delts"],
            secondary: ["Trapezius"]
        },
        reason: "Lateral raises create shoulder width and improve shoulder aesthetics, making them a go-to in bodybuilding.",
        execution: "Hold light dumbbells at your sides. Raise arms laterally to shoulder height with a slight bend in the elbows, then lower under control.",
        warmup: "Arm circles, band shoulder raises, and light warm-up sets to prevent strain.",
        programming: "3–4 sets of 12–20 reps. Use light weight with strict form to prevent cheating."
    },
    {
        name: "Overhead Press",
        intro: "A compound pressing movement that builds upper body pushing strength and shoulder mass.",
        muscles: {
            primary: ["Front delts"],
            secondary: ["Triceps", "Upper traps", "Core"]
        },
        reason: "The overhead press improves upper body strength and shoulder development, making it essential for push strength and posture.",
        execution: "Stand with a barbell at shoulder height. Press the weight overhead until your arms are fully extended. Lower with control.",
        warmup: "Arm circles, band shoulder press, and shoulder dislocations.",
        programming: "3–4 sets of 5–10 reps. Use as a main lift on push or shoulder day."
    },
    {
        name: "Romanian Deadlift",
        intro: "A hip hinge exercise that emphasizes hamstring and glute development.",
        muscles: {
            primary: ["Hamstrings", "Glutes"],
            secondary: ["Spinal erectors", "Forearms"]
        },
        reason: "RDLs build posterior chain strength and flexibility, and improve performance in squats, jumps, and running.",
        execution: "Stand tall with a barbell. Lower the bar by hinging at the hips while keeping a slight bend in the knees. Stretch the hamstrings, then return upright.",
        warmup: "Glute bridges, bodyweight hinges, and light dumbbell RDLs.",
        programming: "3–4 sets of 8–12 reps. Ideal as an accessory on leg or posterior chain days."
    },
    {
        name: "Chest Fly",
        intro: "An isolation movement to target the pectoral muscles through horizontal adduction.",
        muscles: {
            primary: ["Pectorals"],
            secondary: ["Front delts", "Biceps"]
        },
        reason: "Chest flys help develop chest width and separation, complementing pressing movements.",
        execution: "Lie on a flat bench with dumbbells or sit at a fly machine. Extend arms out wide, then bring them together in front of your chest in a hugging motion. Return under control.",
        warmup: "Light band flys, shoulder rolls, and pressing warm-up sets.",
        programming: "3–4 sets of 10–15 reps. Best used after compound presses to fully fatigue the pecs."
    },
    {
        name: "Leg Extension",
        intro: "A machine-based isolation exercise for the quadriceps.",
        muscles: {
            primary: ["Quadriceps"],
            secondary: []
        },
        reason: "Leg extensions allow focused work on the quads, improving knee extension strength and aesthetics.",
        execution: "Sit on the leg extension machine with feet under the pad. Extend your knees to raise the pad, then lower with control.",
        warmup: "Bodyweight squats and light sets on the machine.",
        programming: "3–4 sets of 12–15 reps. Use after compound leg movements for maximal quad fatigue."
    },
    {
        name: "Seated Row",
        intro: "A compound pulling exercise that targets the upper and mid back.",
        muscles: {
            primary: ["Rhomboids", "Lats"],
            secondary: ["Biceps", "Rear delts"]
        },
        reason: "Seated rows build thickness in the back and improve posture and pulling strength.",
        execution: "Sit on a cable row machine. Pull the handle toward your lower ribs, squeezing your shoulder blades together. Return slowly.",
        warmup: "Band rows, scapular retraction drills, light weight warm-up sets.",
        programming: "3–4 sets of 10–12 reps. Great for back days or upper-body pull sessions."
    },
    {
        name: "Lunge",
        intro: "A unilateral lower-body exercise that builds leg strength, balance, and coordination.",
        muscles: {
            primary: ["Quads", "Glutes"],
            secondary: ["Hamstrings", "Calves"]
        },
        reason: "Lunges correct imbalances between legs and engage stabilizing muscles that squats may not fully target.",
        execution: "Step forward with one foot, lowering your back knee toward the floor. Push through your front heel to return to standing.",
        warmup: "Bodyweight lunges, dynamic hip stretches, and glute bridges.",
        programming: "3 sets of 8–12 reps per leg. Add dumbbells or a barbell for increased difficulty."
    }
];

export default exercises;
