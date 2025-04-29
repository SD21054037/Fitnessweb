const muscleGroups = [
    {
        name: "Quads",
        muscles: ["Rectus_femoris", "Vastus_intermedius", "Vastus_lateralis", "Vastus_medialis"],
        path: "/lowerbody2.glb",
        description: "The quadriceps are responsible for knee extension and hip flexion, essential for walking, squatting, and jumping.",
        sportApplication: "Vital for explosive movements like jumping and sprinting. Crucial in sports like football and basketball.",
        commonMistakes: "Leaning too far forward during squats, neglecting full range of motion, and poor warm-up.",
        fiberType: "Mainly Type II (fast-twitch) for power and speed",
        antagonists: ["Hamstrings"],
        stretches: ["Standing quad stretch", "Lying quad stretch", "Couch stretch"],
        videoEmbed: "https://www.youtube.com/embed/dKqfFz9D1Hg"
    },
    {
        name: "Hamstrings",
        muscles: ["Biceps_femoris", "Semimembranosus", "Semitendinosus"],
        path: "/lowerbody2.glb",
        description: "The hamstrings extend the hip and flex the knee, playing a major role in sprinting and lifting.",
        sportApplication: "Essential in sprinting, jumping, and deceleration in sports like soccer and track.",
        commonMistakes: "Overemphasis on quad training, poor hip hinge mechanics, and lack of eccentric training.",
        fiberType: "Mixed fibers (Type I and II) depending on muscle",
        antagonists: ["Quads"],
        stretches: ["Seated hamstring stretch", "Standing hamstring stretch", "Lying hamstring stretch"],
        videoEmbed: "https://www.youtube.com/embed/sM1vQ7P3acI"
    },
    {
        name: "Glutes",
        muscles: ["Gluteus_maximus", "Gluteus_medius", "Gluteus_minimus"],
        path: "/lowerbody2.glb",
        description: "The gluteal muscles stabilize the pelvis, support hip extension, and help maintain posture.",
        sportApplication: "Key for acceleration, jumping, and stability in sports like sprinting and Olympic lifting.",
        commonMistakes: "Letting the lower back overcompensate, skipping glute activation exercises, poor squat depth.",
        fiberType: "Predominantly Type II for explosive movement",
        antagonists: ["Hip Flexors"],
        stretches: ["Pigeon pose", "Seated figure-four stretch", "Lunge with twist"],
        videoEmbed: "https://www.youtube.com/embed/Nc62A4bQxho"
    },
    {
        name: "Adductors",
        muscles: ["Adductor_brevis", "Adductor_longus", "Adductor_magnus", "Gracilis", "Pectineus"],
        path: "/lowerbody2.glb",
        description: "Adductors bring the legs toward the midline and stabilize the hips during movement.",
        sportApplication: "Important for lateral movement and direction changes in soccer, hockey, and tennis.",
        commonMistakes: "Ignoring adductor training, not warming up properly before lateral drills.",
        fiberType: "Mixed Type I and II",
        antagonists: ["Abductors"],
        stretches: ["Butterfly stretch", "Side lunge stretch"],
        videoEmbed: "https://www.youtube.com/embed/5DdM73s7dO4"
    },
    {
        name: "Calves",
        muscles: ["Gastrocnemius", "Soleus","Tibialis_anterior"],
        path: "/lowerbody2.glb",
        description: "Calf muscles help in pushing the foot off the ground, crucial for walking, jumping, and running.",
        sportApplication: "Critical in sprinting, jumping, and change of direction. Used heavily in basketball and sprinting.",
        commonMistakes: "Training only in short range, bouncing during calf raises, neglecting eccentric control.",
        fiberType: "Gastrocnemius = Type II dominant, Soleus = Type I",
        antagonists: ["Tibialis anterior"],
        stretches: ["Wall calf stretch", "Downward dog", "Heel drop on step"],
        videoEmbed: "https://www.youtube.com/embed/9dZYmE8Vsz8"
    },
    {
        name: "Core",
        muscles: ["Rectus_abdominis", "Obliques", "Transverse_abdominis", "Erector_spinae", "Serratus_posterior_inferior"],
        path: "/upperbody2.glb",
        description: "The core muscles stabilize the spine, support posture, and transfer force between the upper and lower body.",
        sportApplication: "Crucial for balance, power transfer, and injury prevention in sports like golf, baseball, and swimming.",
        commonMistakes: "Neglecting rotational exercises, poor breathing technique, and overtraining abs.",
        fiberType: "Type I and II for endurance and power",
        antagonists: ["Erector_spinae"],
        stretches: ["Cat-cow stretch", "Child's pose", "Seated twist"],
        videoEmbed: "https://www.youtube.com/embed/2pLT-olgUJs"
    },
    {
        name: "Back",
        muscles: [
            "Latissimus_dorsi", "Traps",
            "Rhomboid_major", "Rhomboid_minor", "Teres_major", "Teres_minor", "Infraspinatus", "Supraspinatus"
        ],
        path: "/upperbody2.glb",
        description: "The back muscles support the spine, stabilize the shoulders, and assist in pulling and lifting.",
        sportApplication: "Critical for posture, pulling movements, and power transfer in sports like rowing and climbing.",
        commonMistakes: "Neglecting scapular retraction, poor deadlift form, and overtraining the lower back.",
        fiberType: "Mixed Type I and II",
        antagonists: ["Chest"],
        stretches: ["Child's pose", "Cat-cow stretch", "Seated twist"],
        videoEmbed: "https://www.youtube.com/embed/2pLT-olgUJs"
    },
    {
        name: "Upper Arm",
        muscles: ["Biceps_brachii", "Triceps_brachii", "Brachialis"],
        path: "/upperbody2.glb",
        description: "The upper arm group contains muscles responsible for powerful movements such as lifting, pushing, and pulling. These muscles are essential for elbow flexion and extension, and assist in shoulder stability and motion. This group includes both anterior (front) and posterior (back) muscles that work together to control arm movement.",
        sportApplication: "Used in throwing, pulling, and pushing movements in many sports like baseball and gymnastics.",
        commonMistakes: "Overusing momentum during curls, neglecting elbow stability, and improper joint alignment.",
        fiberType: "Mixed Type I and II",
        antagonists: ["Biceps_brachii  Triceps_brachii"],
        stretches: ["Overhead triceps stretch", "Biceps doorway stretch"],
        videoEmbed: "https://www.youtube.com/embed/r7Fq-jgJB1k"
    },
    {
        name: "Forearm",
        muscles: ["Brachioradialis", "Flexors", "Extensors", "Pronator_teres", "Supinator", "Abductor_pollicis_longus"],
        path: "/upperbody2.glb",
        description: "The forearm muscles control grip, wrist movement, and fine motor function of the hand.",
        sportApplication: "Important for climbing, weightlifting, and sports that involve gripping or wrist rotation.",
        commonMistakes: "Ignoring wrist alignment, overtraining flexors or extensors, and poor recovery.",
        fiberType: "Mixed with emphasis on endurance (Type I)",
        antagonists: ["Flexor_group  Extensor_group"],
        stretches: ["Wrist extensor stretch", "Wrist flexor stretch"],
        videoEmbed: "https://www.youtube.com/embed/1t7tJ8MPZ6I"
    },
    {

        name: "Shoulders",
        muscles: ["Rear_delts", "Side_delts", "Front_delts"],
        path: "/upperbody2.glb",
        description: "Shoulder muscles allow for arm abduction, flexion, extension, and rotation.",
        sportApplication: "Vital in overhead and throwing sports like volleyball, swimming, and baseball.",
        commonMistakes: "Neglecting rear delts, overemphasizing pressing movements, and poor rotator cuff stability.",
        fiberType: "Mixed Type I and II",
        antagonists: ["Latissimus_dorsi", "Chest"],
        stretches: ["Cross-body shoulder stretch", "Sleeper stretch"],
        videoEmbed: "https://www.youtube.com/embed/3U0N3mgnUTs"
    },
    {
        name: "Chest",
        muscles: ["Chest"],
        path: "/upperbody2.glb",
        description: "The chest muscles are responsible for shoulder flexion, adduction, and internal rotation.",
        sportApplication: "Critical for pushing movements, balance, and stability in sports like boxing, volleyball, and swimming.",
        commonMistakes: "Neglecting horizontal and vertical pressing, poor bench press form, and overtraining the front delts.",
        fiberType: "Mixed Type I and II",
        antagonists: ["Back"],
        stretches: ["Doorway chest stretch", "Chest opener stretch", "Chest fly stretch"],
        videoEmbed: "https://www.youtube.com/embed/2pLT-olgUJs"
    }
    
];

export default muscleGroups;
