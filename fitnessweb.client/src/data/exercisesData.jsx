const exercises = [
    {
        name: "Barbell-Squat",
        intro: "A fundamental lower-body exercise that targets strength, coordination, and mobility.",
        muscles: {
            group: "Legs",
            primary: ["Quadriceps", "Glutes"],
            secondary: ["Hamstrings", "Spinal erectors", "Core"]
        },
        reason: "The squat is one of the most effective movements for building total leg strength and core stability. It mimics daily movements like sitting and standing, making it a must-have in any training program.",
        execution: "Stand with your feet shoulder-width apart and barbell resting on your traps. Keep your chest up and back straight as you lower your hips back and down. Push through your heels to return to standing.",
        warmup: "Do 5–10 minutes of light cardio, then dynamic stretches for the hips and ankles, followed by bodyweight squats and glute activation (e.g., banded bridges).",
        programming: "Great for leg days or full-body routines. Start with 3–5 sets of 5–10 reps. Rest 1–3 minutes between sets depending on intensity.",
        equipment: "barbell",
        level: "Gemiddeld",
        goal: "Powerlifting"
    },
    {
        name: "Barbell-Bench-Press",
        intro: "A classic compound exercise for upper body strength, especially the chest and triceps.",
        muscles: {
            group: "Chest",
            primary: ["Pectorals"],
            secondary: ["Triceps", "Front delts"]
        },
        reason: "The bench press is ideal for building pushing power and upper body muscle mass. It's also a key strength benchmark in many programs.",
        execution: "Lie flat on a bench with the barbell above your chest. Lower the bar with control until it touches your sternum, then press it back up without locking out your elbows completely.",
        warmup: "5 minutes of arm circles and shoulder mobility, light dumbbell presses, and a few warm-up sets with just the bar.",
        programming: "Works well in push or upper body days. 3–4 sets of 6–10 reps is effective for strength and hypertrophy.",
        equipment: "barbell",
        level: "Gemiddeld",
        goal: "Powerlifting"
    },
    {
        name: "Bicep-Curl",
        intro: "A classic isolation exercise focused on building biceps strength and size.",
        muscles: {
            group: "Arms",
            primary: ["Biceps brachii"],
            secondary: ["Brachialis"]
        },
        reason: "Bicep curls allow focused tension on the biceps, ideal for muscle hypertrophy and aesthetic arm development.",
        execution: "Hold dumbbells with palms facing up. Curl the weights by bending your elbows while keeping your upper arms still. Lower slowly.",
        warmup: "Light dumbbell curls and forearm rotations to prep elbow joints and activate the biceps.",
        programming: "Perform 3–4 sets of 10–15 reps. Great at the end of upper-body or arm-focused workouts.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Powerlifting"
    },
    {
        name: "Chest-Fly",
        intro: "An isolation movement to target the pectoral muscles through horizontal adduction.",
        muscles: {
            group: "Chest",
            primary: ["Pectorals"],
            secondary: ["Front delts", "Biceps"]
        },
        reason: "Chest flys help develop chest width and separation, complementing pressing movements.",
        execution: "Lie on a flat bench with dumbbells or sit at a fly machine. Extend arms out wide, then bring them together in front of your chest in a hugging motion. Return under control.",
        warmup: "Light band flys, shoulder rolls, and pressing warm-up sets.",
        programming: "3–4 sets of 10–15 reps. Best used after compound presses to fully fatigue the pecs.",
        equipment: "machine",
        level: "Gemiddeld",
        goal: "Bodybuilding"
    }
,
    {
        name: "Pull-Up",
        intro: "A bodyweight compound exercise for upper back and arm strength.",
        muscles: {
            group: "Back",
            primary: ["Latissimus dorsi", "Biceps"],
            secondary: ["Rhomboids", "Rear delts", "Forearms"]
        },
        reason: "Pull-ups build back thickness and grip strength, and improve body control. They're essential for calisthenics and overall pulling strength.",
        execution: "Hang from a pull-up bar with a shoulder-width grip. Pull your chest up toward the bar, squeezing your back at the top. Lower yourself with control.",
        warmup: "Shoulder mobility drills, scapular pull-ups, and resistance band rows to activate the lats and rear delts.",
        programming: "Use in pull days or back-focused sessions. Perform 3–4 sets of max reps or assisted reps. For strength, add weight and aim for 5–8 reps.",
        equipment: "bodyweight",
        level: "Gemiddeld",
        goal: "Powerlifting"
    }
    ,
    {
        name: "Romanian-Deadlift",
        intro: "A hip hinge exercise that emphasizes hamstring and glute development.",
        muscles: {
            group: "Legs",
            primary: ["Hamstrings", "Glutes"],
            secondary: ["Spinal erectors", "Forearms"]
        },
        reason: "RDLs build posterior chain strength and flexibility, and improve performance in squats, jumps, and running.",
        execution: "Stand tall with a barbell. Lower the bar by hinging at the hips while keeping a slight bend in the knees. Stretch the hamstrings, then return upright.",
        warmup: "Glute bridges, bodyweight hinges, and light dumbbell RDLs.",
        programming: "3–4 sets of 8–12 reps. Ideal as an accessory on leg or posterior chain days.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Bodybuilding"
    },
    {
        name: "Leg-Extension",
        intro: "A machine-based isolation exercise for the quadriceps.",
        muscles: {
            group: "Legs",
            primary: ["Quadriceps"],
            secondary: []
        },
        reason: "Leg extensions allow focused work on the quads, improving knee extension strength and aesthetics.",
        execution: "Sit on the leg extension machine with feet under the pad. Extend your knees to raise the pad, then lower with control.",
        warmup: "Bodyweight squats and light sets on the machine.",
        programming: "3–4 sets of 12–15 reps. Use after compound leg movements for maximal quad fatigue.",
        equipment: "machine",
        level: "Gemiddeld",
        goal: "Bodybuilding"
    },
    {
        name: "Seated-Row",
        intro: "A compound pulling exercise that targets the upper and mid back.",
        muscles: {
            group: "Back",
            primary: ["Rhomboids", "Lats"],
            secondary: ["Biceps", "Rear delts"]
        },
        reason: "Seated rows build thickness in the back and improve posture and pulling strength.",
        execution: "Sit on a cable row machine. Pull the handle toward your lower ribs, squeezing your shoulder blades together. Return slowly.",
        warmup: "Band rows, scapular retraction drills, light weight warm-up sets.",
        programming: "3–4 sets of 10–12 reps. Great for back days or upper-body pull sessions.",
        equipment: "machine",
        level: "Gemiddeld",
        goal: "Bodybuilding"
    },
    {
        name: "Lunge",
        intro: "A unilateral lower-body exercise that builds leg strength, balance, and coordination.",
        muscles: {
            group: "Legs",
            primary: ["Quads", "Glutes"],
            secondary: ["Hamstrings", "Calves"]
        },
        reason: "Lunges correct imbalances between legs and engage stabilizing muscles that squats may not fully target.",
        execution: "Step forward with one foot, lowering your back knee toward the floor. Push through your front heel to return to standing.",
        warmup: "Bodyweight lunges, dynamic hip stretches, and glute bridges.",
        programming: "3 sets of 8–12 reps per leg. Add dumbbells or a barbell for increased difficulty.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Bodybuilding"
    },


    {
        name: "Dumbbell Thruster",
        intro: "A powerful full-body movement combining a squat and overhead press.",
        muscles: {
            group: "Full Body",
            primary: ["Quadriceps", "Shoulders"],
            secondary: ["Glutes", "Triceps"]
        },
        reason: "Builds explosive strength and cardiovascular endurance in one compound motion.",
        execution: "Squat with dumbbells at shoulders, then drive upward into an overhead press.",
        warmup: "Bodyweight squats, shoulder rolls, light thrusters.",
        programming: "3 sets of 12–15 reps. Rest 30–60s.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Afvallen"
    },
    {
        name: "Front Foot Elevated Split Squat",
        intro: "A unilateral leg strength exercise with increased quad bias.",
        muscles: {
            group: "Legs",
            primary: ["Quadriceps", "Glutes"],
            secondary: ["Hamstrings", "Core"]
        },
        reason: "Enhances balance, mobility, and leg hypertrophy.",
        execution: "Stand with front foot on a plate, descend into a lunge. Keep torso upright.",
        warmup: "Hip flexor stretches, glute bridges, bodyweight lunges.",
        programming: "2–3 sets of 8–10 reps per leg. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gevorderd",
        goal: "Spiermassa"
    },
    {
        name: "Jumping Jacks",
        intro: "A basic cardiovascular bodyweight movement that warms up the entire body.",
        muscles: {
            group: "Full Body",
            primary: ["Legs", "Shoulders"],
            secondary: ["Calves", "Core"]
        },
        reason: "Simple, effective for calorie burn and warm-ups.",
        execution: "Jump feet out while swinging arms overhead, return to start.",
        warmup: "March in place, arm circles, high knees.",
        programming: "3–4 rounds of 30–60s. Short rest.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Romanian Deadlift to Row",
        intro: "Combo exercise targeting hamstrings, glutes, and back in one fluid motion.",
        muscles: {
            group: "Back",
            primary: ["Hamstrings", "Lats"],
            secondary: ["Glutes", "Rear delts"]
        },
        reason: "Improves posterior chain and posture efficiently.",
        execution: "Perform RDL, pause at bottom, then row dumbbells before returning upright.",
        warmup: "Glute activation, light dumbbell rows and hinges.",
        programming: "2–3 sets of 6–8 reps. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gevorderd",
        goal: "Kracht"
    },
    {
        name: "Russian Twist",
        intro: "A rotational core exercise that targets obliques and improves spinal control.",
        muscles: {
            group: "Core",
            primary: ["Obliques"],
            secondary: ["Rectus abdominis", "Hip flexors"]
        },
        reason: "Great for building rotational core strength and definition.",
        execution: "Sit on floor, lean back, twist torso side to side, tapping the ground.",
        warmup: "Plank holds, dynamic trunk twists.",
        programming: "3–4 sets of 20–30 reps (total). Rest 30s.",
        equipment: "bodyweight",
        level: "Gemiddeld",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Z Press",
        intro: "A strict overhead press from the floor that removes leg assistance.",
        muscles: {
            group: "Shoulders",
            primary: ["Deltoids"],
            secondary: ["Triceps", "Core"]
        },
        reason: "Enhances pressing strength and trunk stability.",
        execution: "Sit with legs extended, press dumbbells overhead without leaning back.",
        warmup: "Band shoulder press, thoracic extensions, light Z presses.",
        programming: "2–3 sets of 5–8 reps. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gevorderd",
        goal: "Spiermassa"
    },
    {
        name: "Speed Skaters",
        intro: "A plyometric lateral movement that builds power and coordination.",
        muscles: {
            group: "Legs",
            primary: ["Glutes", "Quads"],
            secondary: ["Hamstrings", "Calves"]
        },
        reason: "Boosts coordination, endurance and lateral stability.",
        execution: "Leap side to side, landing on one leg, mimicking ice skater motion.",
        warmup: "Side lunges, hip mobility drills.",
        programming: "3 sets of 20–30s. Rest 30–60s.",
        equipment: "bodyweight",
        level: "Gemiddeld",
        goal: "Afvallen"
    },
    {
        name: "Single-Arm Dumbbell Floor Press",
        intro: "Unilateral pressing for upper body strength and core engagement.",
        muscles: {
            group: "Chest",
            primary: ["Pectorals"],
            secondary: ["Triceps", "Shoulders", "Obliques"]
        },
        reason: "Improves pressing stability and balance.",
        execution: "Lie on floor, press one dumbbell overhead while keeping body braced.",
        warmup: "Band presses, light dumbbell work, activation sets.",
        programming: "2–3 sets of 6–8 reps per side. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },
    {
        name: "Plank to Push-Up",
        intro: "A core and shoulder endurance move that transitions from plank to push-up.",
        muscles: {
            group: "Core",
            primary: ["Abs", "Shoulders"],
            secondary: ["Triceps"]
        },
        reason: "Improves shoulder control, core stability, and endurance.",
        execution: "Start in forearm plank, press up into push-up position, then lower back.",
        warmup: "Scapular push-ups, forearm planks.",
        programming: "3 rounds of 10 reps. Short rest.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Suitcase Deadlift",
        intro: "A unilateral hinge that works legs, grip, and core asymmetrically.",
        muscles: {
            group: "Legs",
            primary: ["Glutes", "Hamstrings"],
            secondary: ["Obliques", "Forearms"]
        },
        reason: "Challenges posture and core while developing posterior chain strength.",
        execution: "Lift a dumbbell from the floor beside you, keeping core tight and back straight.",
        warmup: "Bodyweight hinges, lateral lunges, suitcase carries.",
        programming: "2–3 sets of 6–8 reps per side. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Kracht"
    },
    {
        name: "Box Jump",
        intro: "A plyometric power movement to develop explosive leg strength.",
        muscles: {
            group: "Legs",
            primary: ["Quadriceps", "Glutes"],
            secondary: ["Calves", "Core"]
        },
        reason: "Improves jump height, athleticism, and coordination.",
        execution: "Jump explosively onto a box, land softly, then reset.",
        warmup: "Bodyweight squats, jump squats, ankle mobility.",
        programming: "3 sets of 8–10 jumps. Rest 2–3 min.",
        equipment: "bodyweight",
        level: "Gevorderd",
        goal: "Kracht"
    },
    {
        name: "Side Plank",
        intro: "A static core exercise focusing on lateral stability.",
        muscles: {
            group: "Core",
            primary: ["Obliques"],
            secondary: ["Shoulders", "Glutes"]
        },
        reason: "Strengthens anti-lateral flexion control and builds solid obliques.",
        execution: "Balance on forearm and feet, keeping body in a straight line.",
        warmup: "Bird-dogs, side lunges, trunk rotations.",
        programming: "3 rounds of 30–45s per side. Rest 30–60s.",
        equipment: "bodyweight",
        level: "Gemiddeld",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Pullover",
        intro: "A hybrid chest and lat movement performed lying on a bench.",
        muscles: {
            group: "Chest",
            primary: ["Pectorals", "Lats"],
            secondary: ["Triceps", "Core"]
        },
        reason: "Great for expanding the rib cage and targeting upper body stretch.",
        execution: "Hold dumbbell overhead, lower it behind head with straight arms, then pull back.",
        warmup: "Light pullover swings, band pull-aparts.",
        programming: "2–3 sets of 6–10 reps. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },
    {
        name: "Bear Crawl",
        intro: "A bodyweight locomotion exercise that builds coordination and core strength.",
        muscles: {
            group: "Full Body",
            primary: ["Core", "Shoulders"],
            secondary: ["Quads", "Back"]
        },
        reason: "Improves cross-body control, mobility, and core engagement.",
        execution: "Crawl forward keeping knees low and hips steady.",
        warmup: "Cat-cows, crawling drills, wrist circles.",
        programming: "3 sets of 20–30s crawls. Short rest.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Hammer Curl",
        intro: "An arm curl variation with neutral grip for forearms and biceps.",
        muscles: {
            group: "Arms",
            primary: ["Biceps brachii", "Brachialis"],
            secondary: ["Forearms"]
        },
        reason: "Emphasizes forearm strength and elbow stability.",
        execution: "Curl dumbbells with palms facing each other, keep elbows tucked.",
        warmup: "Wrist rolls, light curls, biceps stretch.",
        programming: "2–3 sets of 6–8 reps. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },
    {
        name: "Toe Taps",
        intro: "A fast-paced cardio move using a step or box.",
        muscles: {
            group: "Legs",
            primary: ["Calves", "Quads"],
            secondary: ["Core"]
        },
        reason: "Increases heart rate and coordination. Great calorie burner.",
        execution: "Quickly tap one toe then the other on a step, alternating rapidly.",
        warmup: "Marching in place, ankle rolls, light step-ups.",
        programming: "3–4 rounds of 30–60s. Short rest.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Reverse Lunge",
        intro: "A lower body exercise focused on glute and hamstring engagement.",
        muscles: {
            group: "Legs",
            primary: ["Glutes", "Hamstrings"],
            secondary: ["Quads", "Core"]
        },
        reason: "Reduces knee stress compared to forward lunge. Great for strength.",
        execution: "Step backward and drop into lunge. Push through front heel to return.",
        warmup: "Dynamic lunges, hip flexor stretch, glute bridges.",
        programming: "2–3 sets of 8–10 reps per leg. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gevorderd",
        goal: "Kracht"
    },
    {
        name: "Inchworm Walkout",
        intro: "A mobility and core drill that mimics a dynamic plank.",
        muscles: {
            group: "Core",
            primary: ["Abs", "Shoulders"],
            secondary: ["Hamstrings"]
        },
        reason: "Improves mobility, core tension, and shoulder activation.",
        execution: "Hinge at hips, walk hands out to plank, hold briefly, then return.",
        warmup: "Spine rolls, shoulder openers, plank holds.",
        programming: "3 sets of 6–10 reps. Minimal rest.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Bent-Over Row",
        intro: "A pulling movement to strengthen the back and arms.",
        muscles: {
            group: "Back",
            primary: ["Lats", "Rhomboids"],
            secondary: ["Biceps", "Rear delts"]
        },
        reason: "Builds thick upper back and improves posture.",
        execution: "Hinge forward, pull dumbbells to ribs, squeeze shoulder blades.",
        warmup: "Band pull-aparts, light rows, scap squeezes.",
        programming: "2–3 sets of 6–10 reps. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },
    {
        name: "Wall Sit",
        intro: "A static lower-body endurance drill that burns quads and glutes.",
        muscles: {
            group: "Legs",
            primary: ["Quadriceps"],
            secondary: ["Glutes", "Calves"]
        },
        reason: "Excellent for time-under-tension and leg conditioning.",
        execution: "Lean against wall in 90° squat position, hold as long as possible.",
        warmup: "Leg swings, bodyweight squats, calf raises.",
        programming: "3 rounds of 30–60s holds. Short rest.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "High Knees",
        intro: "A fast-paced cardio drill to elevate heart rate and engage the core.",
        muscles: {
            group: "Legs",
            primary: ["Hip flexors", "Quadriceps"],
            secondary: ["Core", "Calves"]
        },
        reason: "Great for fat burning, warm-up, and improving coordination.",
        execution: "Run in place by driving knees up high quickly.",
        warmup: "Marching, jump rope, light skipping.",
        programming: "3–4 sets of 30–45s. Short rest.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Chest Supported Row",
        intro: "A back-focused row with torso supported on an incline bench.",
        muscles: {
            group: "Back",
            primary: ["Lats", "Rhomboids"],
            secondary: ["Biceps", "Rear delts"]
        },
        reason: "Minimizes cheating and isolates back muscles.",
        execution: "Lie chest-down on incline bench, row dumbbells up to sides.",
        warmup: "Band rows, light DB rows, face pulls.",
        programming: "2–3 sets of 6–10 reps. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },
    {
        name: "Bird Dog",
        intro: "A stability and coordination exercise for the core and back.",
        muscles: {
            group: "Core",
            primary: ["Spinal erectors", "Abs"],
            secondary: ["Glutes", "Shoulders"]
        },
        reason: "Reinforces motor control and spine stability.",
        execution: "On all fours, extend opposite arm and leg, then return.",
        warmup: "Cat-cow, plank holds, hip extension drills.",
        programming: "3 rounds of 10–12 reps per side.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Overhead Triceps Extension",
        intro: "An isolation triceps exercise with overhead positioning.",
        muscles: {
            group: "Arms",
            primary: ["Triceps brachii"],
            secondary: ["Shoulders"]
        },
        reason: "Targets long head of the triceps through stretch.",
        execution: "Hold one or two dumbbells overhead, bend elbows to lower behind head, then extend.",
        warmup: "Band triceps pushdowns, shoulder openers.",
        programming: "2–3 sets of 6–10 reps. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },
    {
        name: "Bodyweight Lateral Lunge",
        intro: "A mobility-friendly exercise that targets inner thighs and glutes.",
        muscles: {
            group: "Legs",
            primary: ["Adductors", "Glutes"],
            secondary: ["Quads", "Hamstrings"]
        },
        reason: "Improves hip mobility, lateral strength, and balance.",
        execution: "Step out to the side, bend the stepping leg, keep the other extended.",
        warmup: "Hip openers, side leg swings.",
        programming: "3–4 sets of 10–12 reps per side.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Upright Row",
        intro: "A shoulder and upper trap isolation movement.",
        muscles: {
            group: "Shoulders",
            primary: ["Deltoids", "Trapezius"],
            secondary: ["Biceps"]
        },
        reason: "Builds capped shoulders and upper back width.",
        execution: "Pull dumbbells straight up along torso, elbows leading, stop at mid-chest.",
        warmup: "Band face pulls, light upright rows.",
        programming: "2–3 sets of 6–10 reps. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },
    {
        name: "Jump Squat",
        intro: "A powerful squat variation focused on explosive strength.",
        muscles: {
            group: "Legs",
            primary: ["Glutes", "Quads"],
            secondary: ["Hamstrings", "Calves"]
        },
        reason: "Improves vertical jump and athletic leg power.",
        execution: "Squat down and explode upward. Land softly and repeat.",
        warmup: "Bodyweight squats, ankle hops, glute bridges.",
        programming: "3 sets of 10–12 reps. Short rest.",
        equipment: "bodyweight",
        level: "Gemiddeld",
        goal: "Afvallen"
    },
    {
        name: "Dumbbell Farmers Carry",
        intro: "A loaded carry drill for grip, posture, and core strength.",
        muscles: {
            group: "Full Body",
            primary: ["Forearms", "Core"],
            secondary: ["Glutes", "Traps"]
        },
        reason: "Improves grip, anti-rotation core strength, and endurance.",
        execution: "Walk while holding heavy dumbbells at sides with good posture.",
        warmup: "Wrist rolls, shoulder shrugs, walking lunges.",
        programming: "2–3 rounds of 30–60s walks. Rest 2–3 min.",
        equipment: "dumbbell",
        level: "Gemiddeld",
        goal: "Kracht"
    },
    {
        name: "Leg Raises",
        intro: "A lower ab isolation exercise using bodyweight.",
        muscles: {
            group: "Core",
            primary: ["Lower abs"],
            secondary: ["Hip flexors"]
        },
        reason: "Targets difficult-to-reach lower abs and builds control.",
        execution: "Lie flat and lift legs to 90°, then lower slowly without touching floor.",
        warmup: "Pelvic tilts, bent knee raises.",
        programming: "3–4 sets of 12–15 reps. Short rest.",
        equipment: "bodyweight",
        level: "Beginner",
        goal: "Afvallen"
    },
    // Chest
    {
        name: "Chest Press Machine",
        intro: "A guided compound push movement targeting the pectorals.",
        muscles: {
            group: "Chest",
            primary: ["Pectorals"],
            secondary: ["Triceps", "Front delts"]
        },
        reason: "Safe and stable way to overload chest muscles without free weights.",
        execution: "Sit upright, grip handles, press forward and return slowly.",
        warmup: "Light sets, shoulder circles, band chest openers.",
        programming: "2–3 sets of 6–10 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },

    // Back
    {
        name: "Lat Pulldown",
        intro: "A vertical pulling movement that targets the lats.",
        muscles: {
            group: "Back",
            primary: ["Latissimus dorsi"],
            secondary: ["Biceps", "Rhomboids"]
        },
        reason: "A great alternative to pull-ups for back development.",
        execution: "Pull the bar to your upper chest, squeeze lats, and return with control.",
        warmup: "Band pull-aparts, light pulldowns.",
        programming: "2–3 sets of 6–10 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },

    // Legs
    {
        name: "Leg Press",
        intro: "A powerful leg-building machine for the lower body.",
        muscles: {
            group: "Legs",
            primary: ["Quadriceps", "Glutes"],
            secondary: ["Hamstrings"]
        },
        reason: "Allows for heavy leg training with minimal back strain.",
        execution: "Push platform away with feet, control back down without locking knees.",
        warmup: "Bodyweight squats, hamstring curls, calf raises.",
        programming: "2–3 sets of 8–10 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Gemiddeld",
        goal: "Kracht"
    },

    // Shoulders
    {
        name: "Lateral Raise Machine",
        intro: "An isolation machine targeting the side delts for shoulder width.",
        muscles: {
            group: "Shoulders",
            primary: ["Side delts"],
            secondary: ["Trapezius"]
        },
        reason: "Provides constant tension on lateral deltoids.",
        execution: "Sit in machine, raise arms laterally to shoulder height, then lower slowly.",
        warmup: "Arm swings, shoulder mobility drills.",
        programming: "2–3 sets of 10–12 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },

    // Core
    {
        name: "Cable Crunch",
        intro: "A machine-assisted core movement to build ab definition.",
        muscles: {
            group: "Core",
            primary: ["Rectus abdominis"],
            secondary: ["Obliques"]
        },
        reason: "Allows weighted ab training to build visible core muscles.",
        execution: "Kneel under cable, crunch forward by flexing abs, then return.",
        warmup: "Plank holds, light band crunches.",
        programming: "3–4 sets of 12–15 reps. Short rest.",
        equipment: "machine",
        level: "Gemiddeld",
        goal: "Afvallen"
    },

    // Arms (Biceps)
    {
        name: "Preacher Curl Machine",
        intro: "An isolated biceps curl performed with elbow support.",
        muscles: {
            group: "Arms",
            primary: ["Biceps brachii"],
            secondary: ["Brachialis"]
        },
        reason: "Strict movement isolates biceps and reduces cheating.",
        execution: "Sit at machine, curl pad handles up and lower slowly.",
        warmup: "Light curls, wrist rolls.",
        programming: "2–3 sets of 8–10 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },

    // Arms (Triceps)
    {
        name: "Triceps Extension Machine",
        intro: "A seated extension for isolating the triceps.",
        muscles: {
            group: "Arms",
            primary: ["Triceps brachii"],
            secondary: []
        },
        reason: "Keeps form strict and isolates triceps through full ROM.",
        execution: "Extend arms down, squeeze triceps, and control the return.",
        warmup: "Triceps pushdowns, shoulder warmups.",
        programming: "2–3 sets of 8–12 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },

    // Glutes/Hamstrings
    {
        name: "Glute Kickback Machine",
        intro: "An isolation movement to target the glutes directly.",
        muscles: {
            group: "Glutes",
            primary: ["Gluteus maximus"],
            secondary: ["Hamstrings"]
        },
        reason: "Provides direct tension and controlled overload for glute development.",
        execution: "Push foot back against pad, squeeze glute, and return with control.",
        warmup: "Glute bridges, band kickbacks.",
        programming: "3 sets of 10–12 reps per leg. Rest 1–2 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },
    // Chest
    {
        name: "Pec Deck Machine",
        intro: "An isolation chest machine for fly-like movement.",
        muscles: {
            group: "Chest",
            primary: ["Pectorals"],
            secondary: ["Front delts", "Biceps"]
        },
        reason: "Focuses on inner chest contraction with safe, guided range.",
        execution: "Bring arms together in a hugging motion, squeeze chest, return slowly.",
        warmup: "Band flys, shoulder mobility.",
        programming: "2–3 sets of 10–12 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },

    // Back
    {
        name: "Seated Cable Row",
        intro: "A compound row variation using a cable machine.",
        muscles: {
            group: "Back",
            primary: ["Rhomboids", "Lats"],
            secondary: ["Biceps", "Rear delts"]
        },
        reason: "Smooth tension and adjustable grip variations for full back targeting.",
        execution: "Sit upright, pull handle to torso, squeeze shoulder blades, return slowly.",
        warmup: "Scapular retractions, light band rows.",
        programming: "2–3 sets of 6–10 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },

    // Legs
    {
        name: "Seated Leg Curl",
        intro: "A hamstring isolation exercise using a seated machine.",
        muscles: {
            group: "Legs",
            primary: ["Hamstrings"],
            secondary: ["Calves", "Glutes"]
        },
        reason: "Provides full hamstring range while protecting joints.",
        execution: "Bend knees against the pad, squeeze and control back.",
        warmup: "Glute bridges, light hamstring curls.",
        programming: "2–3 sets of 8–12 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },

    // Shoulders
    {
        name: "Reverse Pec Deck",
        intro: "A rear delt machine for scapular retraction and shoulder rear side development.",
        muscles: {
            group: "Shoulders",
            primary: ["Rear delts"],
            secondary: ["Trapezius", "Rhomboids"]
        },
        reason: "Targets rear delts more effectively than free weights for many.",
        execution: "Set machine arms in reverse fly position, pull arms back and out.",
        warmup: "Band pull-aparts, rear delt raises.",
        programming: "2–3 sets of 10–12 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Gemiddeld",
        goal: "Spiermassa"
    },

    // Core
    {
        name: "Ab Rotation Machine",
        intro: "A core machine that targets the obliques via trunk rotation.",
        muscles: {
            group: "Core",
            primary: ["Obliques"],
            secondary: ["Abs"]
        },
        reason: "Works the twisting motion of the core under resistance.",
        execution: "Set chest against pad, rotate torso side to side under control.",
        warmup: "Trunk twists, side planks.",
        programming: "3–4 sets of 15–20 reps. Short rest.",
        equipment: "machine",
        level: "Beginner",
        goal: "Afvallen"
    },

    // Arms
    {
        name: "Cable Triceps Pushdown",
        intro: "A staple cable exercise for isolating the triceps.",
        muscles: {
            group: "Arms",
            primary: ["Triceps brachii"],
            secondary: []
        },
        reason: "Smooth tension and easy load adjustment for isolated triceps overload.",
        execution: "Push handle down with elbows tucked, return slowly.",
        warmup: "Band pushdowns, light dumbbell extensions.",
        programming: "2–3 sets of 10–12 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },
    {
        name: "Cable Curl",
        intro: "A biceps curl using a cable for constant tension.",
        muscles: {
            group: "Arms",
            primary: ["Biceps brachii"],
            secondary: ["Forearms"]
        },
        reason: "Improves control and contraction with continuous resistance.",
        execution: "Curl bar up while keeping elbows tight, lower slowly.",
        warmup: "Light DB curls, wrist rotations.",
        programming: "2–3 sets of 8–12 reps. Rest 2–3 min.",
        equipment: "machine",
        level: "Beginner",
        goal: "Spiermassa"
    },
    {
        "name": "Hack Squat",
        "intro": "A machine-based squat variation that emphasizes the quads.",
        "muscles": {
            "group": "Legs",
            "primary": ["Quadriceps"],
            "secondary": ["Glutes", "Hamstrings"]
        },
        "reason": "Provides a safer alternative to traditional squats while isolating the quads.",
        "execution": "Position yourself in the machine, lower until your thighs are parallel, and push back up.",
        "warmup": "Bodyweight squats, light hack squat sets.",
        "programming": "2–3 sets of 8–12 reps. Rest 2–3 min.",
        "equipment": "machine",
        "level": "Gemiddeld",
        "goal": "Bodybuilding"
    },
    {
        "name": "Incline Dumbbell Press",
        "intro": "Targets the upper chest and front delts using a bench at an incline.",
        "muscles": {
            "group": "Chest",
            "primary": ["Upper Pectorals"],
            "secondary": ["Triceps", "Front delts"]
        },
        "reason": "Improves chest shape and pressing power from different angles.",
        "execution": "Press dumbbells upward from an incline bench and lower with control.",
        "warmup": "Incline pushups, light DB presses.",
        "programming": "3 sets of 8–10 reps. Rest 2 min.",
        "equipment": "dumbbell",
        "level": "Gemiddeld",
        "goal": "Bodybuilding"
    },
    {
        "name": "Goblet Squat",
        "intro": "A front-loaded squat variation using a dumbbell.",
        "muscles": {
            "group": "Legs",
            "primary": ["Quads", "Glutes"],
            "secondary": ["Core"]
        },
        "reason": "Improves squat mechanics and core stability.",
        "execution": "Hold a dumbbell at chest level, squat down and stand back up.",
        "warmup": "Bodyweight squats, hip openers.",
        "programming": "3 sets of 10–15 reps. Short rest.",
        "equipment": "dumbbell",
        "level": "Beginner",
        "goal": "Afvallen"
    },
    {
        "name": "Arnold Press",
        "intro": "A shoulder press variation that targets all heads of the deltoid.",
        "muscles": {
            "group": "Shoulders",
            "primary": ["Front delts", "Lateral delts"],
            "secondary": ["Triceps"]
        },
        "reason": "Builds complete shoulder development and mobility.",
        "execution": "Rotate palms during the press from front to overhead.",
        "warmup": "Arm circles, light overhead presses.",
        "programming": "3 sets of 8–12 reps. Rest 90s.",
        "equipment": "dumbbell",
        "level": "Gevorderd",
        "goal": "Bodybuilding"
    },
    {
        "name": "T-Bar Row",
        "intro": "A heavy compound back movement for thickness.",
        "muscles": {
            "group": "Back",
            "primary": ["Lats", "Rhomboids"],
            "secondary": ["Rear delts", "Biceps"]
        },
        "reason": "Builds a thick, dense back and pulling strength.",
        "execution": "Hinge at hips, pull handle toward chest, control return.",
        "warmup": "Light rows, scap pulls.",
        "programming": "3 sets of 6–10 reps. Rest 2–3 min.",
        "equipment": "barbell",
        "level": "Gevorderd",
        "goal": "Powerlifting"
    },
    {
        "name": "Weighted Dip",
        "intro": "A compound pushing movement for chest, shoulders, and triceps.",
        "muscles": {
            "group": "Chest",
            "primary": ["Pectorals", "Triceps"],
            "secondary": ["Front delts"]
        },
        "reason": "Great for upper body pushing strength and mass.",
        "execution": "Lower body between bars, push back to start while wearing weight.",
        "warmup": "Bodyweight dips, shoulder mobility drills.",
        "programming": "3 sets of 6–8 reps. Rest 2–3 min.",
        "equipment": "bodyweight",
        "level": "Gevorderd",
        "goal": "Powerlifting"
    },
    {
        "name": "Cable Lateral Raise",
        "intro": "An isolation movement for the side delts using a cable machine.",
        "muscles": {
            "group": "Shoulders",
            "primary": ["Lateral delts"],
            "secondary": ["Trapezius"]
        },
        "reason": "Constant tension throughout range, helps widen shoulders.",
        "execution": "Raise cable handle sideways to shoulder height, lower slowly.",
        "warmup": "Arm swings, light lateral raises.",
        "programming": "3–4 sets of 12–15 reps. Short rest.",
        "equipment": "machine",
        "level": "Gemiddeld",
        "goal": "Bodybuilding"
    },
    {
        "name": "Landmine Press",
        "intro": "A pressing movement using a landmine attachment for shoulders and chest.",
        "muscles": {
            "group": "Shoulders",
            "primary": ["Front delts", "Chest"],
            "secondary": ["Triceps", "Core"]
        },
        "reason": "Great for beginners and shoulder-safe pressing.",
        "execution": "Press the barbell upward and slightly forward from chest level.",
        "warmup": "Band presses, shoulder rotations.",
        "programming": "3 sets of 10 reps. Rest 1–2 min.",
        "equipment": "barbell",
        "level": "Beginner",
        "goal": "Bodybuilding"
    },
    {
        "name": "Zercher Squat",
        "intro": "A squat variation that places the barbell in the crook of the elbows.",
        "muscles": {
            "group": "Legs",
            "primary": ["Quads", "Glutes"],
            "secondary": ["Hamstrings", "Core"]
        },
        "reason": "Builds leg strength and requires full-body tension and stability.",
        "execution": "Hold bar in arms, squat down keeping chest up, stand back up.",
        "warmup": "Bodyweight squats, goblet squats.",
        "programming": "3 sets of 5–8 reps. Rest 2–3 min.",
        "equipment": "barbell",
        "level": "Gevorderd",
        "goal": "Powerlifting"
    },
    {
        "name": "Single-Leg Glute Bridge",
        "intro": "An isolation glute exercise performed from the floor.",
        "muscles": {
            "group": "Glutes",
            "primary": ["Gluteus maximus"],
            "secondary": ["Hamstrings", "Core"]
        },
        "reason": "Improves glute activation and addresses imbalances.",
        "execution": "With one leg extended, lift hips by pressing through planted heel.",
        "warmup": "Double leg bridges, hamstring curls.",
        "programming": "3 sets of 10 reps per side. Short rest.",
        "equipment": "bodyweight",
        "level": "Beginner",
        "goal": "Afvallen"
    },
    
        {
            "name": "Barbell Hip Thrust",
            "intro": "A powerful glute-focused exercise performed with a barbell across the hips.",
            "muscles": {
                "group": "Glutes",
                "primary": ["Gluteus maximus"],
                "secondary": ["Hamstrings", "Core"]
            },
            "reason": "Excellent for building glute strength, size, and explosiveness.",
            "execution": "Rest upper back on bench, feet flat, thrust hips upward and squeeze glutes.",
            "warmup": "Bodyweight bridges, light barbell thrusts.",
            "programming": "3 sets of 8–12 reps. Rest 2–3 min.",
            "equipment": "barbell",
            "level": "Gemiddeld",
            "goal": "Bodybuilding"
        },
        {
            "name": "Sled Push",
            "intro": "A full-body explosive movement using a weighted sled.",
            "muscles": {
                "group": "Full Body",
                "primary": ["Legs", "Glutes"],
                "secondary": ["Core", "Shoulders"]
            },
            "reason": "Improves conditioning, strength, and power.",
            "execution": "Drive sled forward by pushing through the legs and maintaining a flat back.",
            "warmup": "Light sled drags, ankle mobility drills.",
            "programming": "3–5 rounds of 20m pushes. Rest 1–2 min.",
            "equipment": "machine",
            "level": "Gevorderd",
            "goal": "Afvallen"
        },
        {
            "name": "TRX Row",
            "intro": "A bodyweight pulling exercise using suspension straps.",
            "muscles": {
                "group": "Back",
                "primary": ["Lats", "Rhomboids"],
                "secondary": ["Biceps", "Rear delts"]
            },
            "reason": "Great for developing pulling strength and scapular control.",
            "execution": "Hold TRX handles, lean back and pull chest toward anchor point.",
            "warmup": "Band rows, scapular pushups.",
            "programming": "3 sets of 10–15 reps. Short rest.",
            "equipment": "bodyweight",
            "level": "Beginner",
            "goal": "Afvallen"
        },
        {
            "name": "Banded Face Pull",
            "intro": "An upper back and rear delt exercise using resistance bands.",
            "muscles": {
                "group": "Shoulders",
                "primary": ["Rear delts", "Trapezius"],
                "secondary": ["Rotator cuff"]
            },
            "reason": "Improves posture, scapular stability, and shoulder health.",
            "execution": "Pull band toward face while keeping elbows high and squeezing shoulder blades.",
            "warmup": "Band dislocations, wall slides.",
            "programming": "3 sets of 15–20 reps. Short rest.",
            "equipment": "band",
            "level": "Beginner",
            "goal": "Bodybuilding"
        },
        {
            "name": "Step-Up",
            "intro": "A unilateral leg exercise that builds strength and coordination.",
            "muscles": {
                "group": "Legs",
                "primary": ["Quads", "Glutes"],
                "secondary": ["Hamstrings", "Calves"]
            },
            "reason": "Great for balance, leg strength, and athleticism.",
            "execution": "Step up onto a box or bench with one leg and drive through the heel.",
            "warmup": "Leg swings, bodyweight lunges.",
            "programming": "3 sets of 8–10 reps per leg. Rest 1–2 min.",
            "equipment": "dumbbell",
            "level": "Beginner",
            "goal": "Afvallen"
        },
        {
            "name": "Barbell Row",
            "intro": "A horizontal pulling compound exercise for the back.",
            "muscles": {
                "group": "Back",
                "primary": ["Lats", "Rhomboids"],
                "secondary": ["Biceps", "Rear delts"]
            },
            "reason": "Improves back thickness and posture.",
            "execution": "Hinge forward, row barbell to your torso while keeping back flat.",
            "warmup": "Band pull-aparts, light rows.",
            "programming": "3 sets of 6–10 reps. Rest 2–3 min.",
            "equipment": "barbell",
            "level": "Gevorderd",
            "goal": "Powerlifting"
        },
        {
            "name": "Cable Woodchopper",
            "intro": "A dynamic core movement mimicking chopping motion.",
            "muscles": {
                "group": "Core",
                "primary": ["Obliques"],
                "secondary": ["Abs", "Shoulders"]
            },
            "reason": "Improves rotational strength and core control.",
            "execution": "Pull cable diagonally across body, pivot feet slightly, control return.",
            "warmup": "Torso twists, band woodchoppers.",
            "programming": "3 sets of 12–15 reps per side. Short rest.",
            "equipment": "machine",
            "level": "Gemiddeld",
            "goal": "Afvallen"
        },
        {
            "name": "Reverse Lunge",
            "intro": "A lower body exercise focused on glute and hamstring engagement with reduced knee stress.",
            "muscles": {
                "group": "Legs",
                "primary": ["Glutes", "Hamstrings"],
                "secondary": ["Quads", "Core"]
            },
            "reason": "Safer for knees and builds strength unilaterally.",
            "execution": "Step backward and lower back knee to floor, return to start position.",
            "warmup": "Bodyweight lunges, glute bridges.",
            "programming": "3 sets of 8–10 reps per leg. Rest 90s.",
            "equipment": "dumbbell",
            "level": "Gemiddeld",
            "goal": "Bodybuilding"
        },
        {
            "name": "Cable Overhead Triceps Extension",
            "intro": "An isolation triceps movement using a rope or straight bar.",
            "muscles": {
                "group": "Arms",
                "primary": ["Triceps brachii"],
                "secondary": []
            },
            "reason": "Stretches and overloads the long head of the triceps effectively.",
            "execution": "Extend arms overhead and return with control without flaring elbows.",
            "warmup": "Band pushdowns, shoulder warmup sets.",
            "programming": "3 sets of 10–12 reps. Rest 60–90s.",
            "equipment": "machine",
            "level": "Gemiddeld",
            "goal": "Bodybuilding"
        },
        {
            "name": "Incline Leg Raise",
            "intro": "A core exercise targeting the lower abdominals using an incline bench.",
            "muscles": {
                "group": "Core",
                "primary": ["Lower abs"],
                "secondary": ["Hip flexors"]
            },
            "reason": "Increases intensity and difficulty of standard leg raises.",
            "execution": "Lie on incline bench, lift legs and lower slowly without touching bench.",
            "warmup": "Lying knee raises, planks.",
            "programming": "3 sets of 12–15 reps. Short rest.",
            "equipment": "bodyweight",
            "level": "Gemiddeld",
            "goal": "Afvallen"
        },
        
            {
                "name": "Chest Dips",
                "intro": "A bodyweight pushing exercise that emphasizes lower chest and triceps.",
                "muscles": {
                    "group": "Chest",
                    "primary": ["Pectorals", "Triceps"],
                    "secondary": ["Front delts"]
                },
                "reason": "Great for chest development and upper body strength with minimal equipment.",
                "execution": "Lean forward while lowering yourself between parallel bars, push back up.",
                "warmup": "Shoulder mobility, bodyweight dips.",
                "programming": "3 sets of 8–12 reps. Rest 1–2 min.",
                "equipment": "bodyweight",
                "level": "Gevorderd",
                "goal": "Bodybuilding"
            },
            {
                "name": "Front Raise",
                "intro": "An isolation exercise for the anterior deltoids.",
                "muscles": {
                    "group": "Shoulders",
                    "primary": ["Front delts"],
                    "secondary": ["Upper chest"]
                },
                "reason": "Enhances shoulder symmetry and definition.",
                "execution": "Lift dumbbells in front of you to shoulder height and lower under control.",
                "warmup": "Arm swings, light lateral raises.",
                "programming": "3 sets of 10–15 reps. Rest 60s.",
                "equipment": "dumbbell",
                "level": "Gemiddeld",
                "goal": "Bodybuilding"
            },
            {
                "name": "Farmer's Walk",
                "intro": "A loaded carry that builds grip, core, and posture.",
                "muscles": {
                    "group": "Full Body",
                    "primary": ["Forearms", "Core"],
                    "secondary": ["Traps", "Glutes"]
                },
                "reason": "Builds total-body strength, coordination, and stability.",
                "execution": "Hold heavy weights at your sides and walk in a straight line with good posture.",
                "warmup": "Wrist rolls, shrugs, light carries.",
                "programming": "3 rounds of 30–60s. Rest 2 min.",
                "equipment": "dumbbell",
                "level": "Gemiddeld",
                "goal": "Kracht"
            },
            {
                "name": "Cable Kickback",
                "intro": "An isolation glute movement using a cable machine.",
                "muscles": {
                    "group": "Glutes",
                    "primary": ["Gluteus maximus"],
                    "secondary": ["Hamstrings"]
                },
                "reason": "Direct glute targeting for improved tone and activation.",
                "execution": "Kick one leg back using ankle strap on cable, squeeze glutes at top.",
                "warmup": "Glute bridges, bodyweight kickbacks.",
                "programming": "3 sets of 12–15 reps per leg. Rest 60s.",
                "equipment": "machine",
                "level": "Gemiddeld",
                "goal": "Bodybuilding"
            },
            {
                "name": "Dumbbell Chest Press on Stability Ball",
                "intro": "Combines pressing strength with core stabilization.",
                "muscles": {
                    "group": "Chest",
                    "primary": ["Pectorals"],
                    "secondary": ["Triceps", "Core"]
                },
                "reason": "Increases activation of stabilizers and enhances balance.",
                "execution": "Lie on a stability ball and press dumbbells upward while keeping hips lifted.",
                "warmup": "Glute bridges, light dumbbell presses.",
                "programming": "3 sets of 10–12 reps. Rest 1–2 min.",
                "equipment": "dumbbell",
                "level": "Gemiddeld",
                "goal": "Afvallen"
            },
            {
                "name": "Kettlebell Swing",
                "intro": "An explosive hip hinge movement using a kettlebell.",
                "muscles": {
                    "group": "Full Body",
                    "primary": ["Hamstrings", "Glutes"],
                    "secondary": ["Shoulders", "Core"]
                },
                "reason": "Improves power, endurance, and posterior chain development.",
                "execution": "Swing kettlebell from between legs up to chest height using hip drive.",
                "warmup": "Hip hinges, light swings.",
                "programming": "3 rounds of 20–30s swings. Rest 30–60s.",
                "equipment": "kettlebell",
                "level": "Gemiddeld",
                "goal": "Afvallen"
            },
            {
                "name": "Spiderman Push-Up",
                "intro": "A push-up variation that adds core activation and mobility.",
                "muscles": {
                    "group": "Chest",
                    "primary": ["Pectorals", "Triceps"],
                    "secondary": ["Obliques", "Shoulders"]
                },
                "reason": "Enhances upper body strength and dynamic mobility.",
                "execution": "Bring one knee to elbow during each push-up rep.",
                "warmup": "Plank to elbow, shoulder taps.",
                "programming": "3 sets of 10–12 reps. Short rest.",
                "equipment": "bodyweight",
                "level": "Gevorderd",
                "goal": "Afvallen"
            },
            {
                "name": "Stiff-Leg Deadlift",
                "intro": "Targets the hamstrings and glutes using a barbell.",
                "muscles": {
                    "group": "Legs",
                    "primary": ["Hamstrings"],
                    "secondary": ["Glutes", "Spinal erectors"]
                },
                "reason": "Builds posterior chain strength with focus on hamstrings.",
                "execution": "With straight legs, hinge at hips and lower barbell to mid-shin, then return up.",
                "warmup": "Bodyweight good mornings, light RDLs.",
                "programming": "3 sets of 6–10 reps. Rest 2–3 min.",
                "equipment": "barbell",
                "level": "Gevorderd",
                "goal": "Powerlifting"
            },
            {
                "name": "Dumbbell Lateral Lunge",
                "intro": "A lateral movement for glute, quad, and adductor strength.",
                "muscles": {
                    "group": "Legs",
                    "primary": ["Adductors", "Glutes"],
                    "secondary": ["Quads"]
                },
                "reason": "Improves mobility, balance, and lower body stability.",
                "execution": "Step to the side and lunge while keeping opposite leg straight.",
                "warmup": "Side lunges, hip mobility drills.",
                "programming": "3 sets of 8–10 reps per side. Rest 90s.",
                "equipment": "dumbbell",
                "level": "Gemiddeld",
                "goal": "Afvallen"
            },
            {
                "name": "Incline Cable Chest Fly",
                "intro": "An isolation movement for upper chest with constant cable tension.",
                "muscles": {
                    "group": "Chest",
                    "primary": ["Pectorals"],
                    "secondary": ["Front delts", "Biceps"]
                },
                "reason": "Targets the clavicular fibers of the chest for full development.",
                "execution": "Pull cables upward and inward in a hugging motion from incline bench.",
                "warmup": "Band flys, incline push-ups.",
                "programming": "3 sets of 12–15 reps. Rest 1–2 min.",
                "equipment": "machine",
                "level": "Gevorderd",
                "goal": "Bodybuilding"
            }
        

    







];

export default exercises;
