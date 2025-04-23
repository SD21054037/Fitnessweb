//const muscles = [
//    { name: 'Lats', description: 'The latissimus dorsi (lats) is a large, flat muscle of the back that plays a crucial role in upper body movement, posture, and stability. It is responsible for shoulder extension, adduction, and internal rotation, making it essential for pulling motions like pull-ups, rowing, and swimming. The lats also assist in scapular depression and retraction, contributing to shoulder and back stability. Additionally, they help stabilize the lumbar spine through their connection to the thoracolumbar fascia, aiding in posture and core support. Beyond movement, the lats assist in deep respiration by expanding the rib cage during forceful breathing.', path: '/upperbody2.glb' },
//    { name: 'Schoulders', description: 'The shoulder muscles, primarily the deltoid and rotator cuff muscles, play a key role in arm movement, stability, and posture. The deltoid is responsible for shoulder flexion, abduction, and extension, allowing for movements like lifting, reaching, and pressing. The rotator cuff (supraspinatus, infraspinatus, teres minor, and subscapularis) stabilizes the glenohumeral joint, enabling controlled rotation and preventing dislocation. These muscles work together to provide mobility, strength, and dynamic stability, making them essential for sports, overhead movements, and functional activities like lifting and throwing. Proper shoulder function is crucial for injury prevention and optimal upper body performance.', path: '/upperbody2.glb' },
//    { name: 'Chest', description: 'The chest muscles, primarily the pectoralis major and pectoralis minor, play a key role in upper body strength, movement, and stability. The pectoralis major is responsible for shoulder flexion, adduction, and internal rotation, enabling pushing movements like bench presses, push-ups, and punching. The pectoralis minor assists in scapular stabilization and depression, supporting shoulder mobility and posture. These muscles are essential for generating power in sports, functional movements, and daily activities requiring upper body force. Proper chest strength enhances performance, stability, and injury prevention in both athletic and everyday tasks.', path: '/upperbody2.glb' },
//    { name: 'Abductor_pollicis_longus', description: 'The abductor pollicis longus is a muscle in the forearm that functions to abduct and extend the thumb at the wrist. It is essential for thumb movement and grip strength.', path: '/upperbody2.glb' },
//    { name: 'Abs', description: 'The abdominal muscles play a crucial role in core stability, posture, and movement. They assist in flexion, rotation, and stabilization of the trunk, essential for overall strength and balance.', path: '/upperbody2.glb' },
//    { name: 'Anconeus', description: 'The anconeus is a small muscle located at the elbow that assists in extending the forearm and stabilizing the elbow joint.', path: '/upperbody2.glb' },
//    { name: 'Biceps', description: 'The biceps brachii is a two-headed muscle of the upper arm responsible for flexing the elbow and supinating the forearm. It plays a vital role in pulling movements and arm strength.', path: '/upperbody2.glb' },
//    { name: 'Brachialis', description: 'The brachialis is a deep muscle of the upper arm that primarily functions to flex the elbow joint, assisting the biceps in arm movement.', path: '/upperbody2.glb' },
//    { name: 'Brachioradialis', description: 'The brachioradialis is a forearm muscle that aids in flexing the elbow, especially when the hand is in a neutral grip position.', path: '/upperbody2.glb' },
//    { name: 'Extensors', description: 'The extensor muscles of the forearm are responsible for extending the wrist and fingers, playing a crucial role in hand and finger movement.', path: '/upperbody2.glb' },
//    { name: 'Flexors', description: 'The flexor muscles of the forearm allow for wrist and finger flexion, enabling gripping and fine motor control.', path: '/upperbody2.glb' },
//    { name: 'Infraspinatus', description: 'The infraspinatus is part of the rotator cuff muscles and is responsible for external rotation of the shoulder and shoulder stability.', path: '/upperbody2.glb' },
//    { name: 'Obliques', description: 'The oblique muscles are located on the sides of the abdomen and assist in trunk rotation, lateral flexion, and core stability.', path: '/upperbody2.glb' },
//    { name: 'Pronator_teres', description: 'The pronator teres muscle helps in pronating the forearm, allowing the palm to turn downward.', path: '/upperbody2.glb' },
//    { name: 'Rhomboid_major', description: 'The rhomboid major muscle is located in the upper back and is responsible for retracting and stabilizing the scapula.', path: '/upperbody2.glb' },
//    { name: 'Rhomboid_minor', description: 'The rhomboid minor is a small muscle of the upper back that assists in scapular retraction and stabilization.', path: '/upperbody2.glb' },
//    { name: 'Serratus_posterior_inferior', description: 'The serratus posterior inferior is a back muscle that helps in forced expiration by depressing the lower ribs.', path: '/upperbody2.glb' },
//    { name: 'Spinal_erectors', description: 'The spinal erectors are a group of muscles along the spine that play a key role in maintaining posture and allowing for back extension.', path: '/upperbody2.glb' },
//    { name: 'Teres_major', description: 'The teres major is a muscle of the upper back that assists in shoulder extension, adduction, and medial rotation.', path: '/upperbody2.glb' },
//    { name: 'Traps', description: 'The trapezius muscle spans the upper back and neck, playing a crucial role in scapular movement, posture, and neck stability.', path: '/upperbody2.glb' },
//    { name: 'Adductor_brevis', description: 'The adductor brevis is a short muscle in the inner thigh responsible for hip adduction, helping bring the leg toward the midline of the body. It also assists in hip flexion and rotation.', path: '/lowerbody2.glb' },
//    { name: 'Adductor_longus', description: 'The adductor longus is a thigh muscle that plays a key role in hip adduction, flexion, and medial rotation, essential for movements like walking, running, and stabilizing the pelvis.', path: '/lowerbody2.glb' },
//    { name: 'Adductor_magnus', description: 'The adductor magnus is a large inner thigh muscle involved in hip adduction, extension, and rotation. It contributes to powerful leg movements and overall lower body stability.', path: '/lowerbody2.glb' },
//    { name: 'Calves', description: 'The calf muscles, consisting of the gastrocnemius and soleus, are responsible for plantarflexion of the foot, enabling movements like walking, running, and jumping.', path: '/lowerbody2.glb' },
//    { name: 'Glutes', description: 'The gluteal muscles (gluteus maximus, medius, and minimus) are essential for hip movement, stability, and power. They assist in hip extension, abduction, and external rotation.', path: '/lowerbody2.glb' },
//    { name: 'Gracilis', description: 'The gracilis is a long, thin muscle in the inner thigh that aids in hip adduction, knee flexion, and medial rotation of the leg.', path: '/lowerbody2.glb' },
//    { name: 'Hamstrings', description: 'The hamstring muscles (biceps femoris, semitendinosus, and semimembranosus) are responsible for knee flexion and hip extension, playing a crucial role in walking, running, and jumping.', path: '/lowerbody2.glb' },
//    { name: 'Iliacus', description: 'The iliacus is a hip flexor muscle that works with the psoas major to enable hip flexion and maintain posture, playing a key role in walking and running.', path: '/lowerbody2.glb' },
//    { name: 'Iliotibial_tract', description: 'The iliotibial tract (IT band) is a thick band of connective tissue that helps stabilize the knee during walking, running, and other lower body movements.', path: '/lowerbody2.glb' },
//    { name: 'Pectineus', description: 'The pectineus muscle is located in the upper thigh and is responsible for hip flexion and adduction, contributing to leg movement and pelvic stability.', path: '/lowerbody2.glb' },
//    { name: 'Quads', description: 'The quadriceps femoris is a group of four muscles in the front of the thigh responsible for knee extension and hip flexion, essential for walking, running, and jumping.', path: '/lowerbody2.glb' },
//    { name: 'Sartorius', description: 'The sartorius is the longest muscle in the body, running from the hip to the knee. It aids in hip flexion, abduction, and lateral rotation, as well as knee flexion.', path: '/lowerbody2.glb' },
//    { name: 'Semimembranosus', description: 'The semimembranosus is one of the hamstring muscles responsible for knee flexion, hip extension, and medial rotation of the leg.', path: '/lowerbody2.glb' },
//    { name: 'Vastus_intermedius', description: 'The vastus intermedius is one of the quadriceps muscles that helps extend the knee, playing a key role in leg movement and stability.', path: '/lowerbody2.glb' },
//    { name: 'Triceps', description: 'The triceps brachii is a three-headed muscle of the upper arm that extends the elbow joint and plays a key role in pushing movements.', path: '/upperbody2.glb' },
//];

const muscles = [
    {
        name: "Biceps_femoris",
        displayName: "Biceps femoris",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Ischial tuberosity of pelvis.",
            insertion: "Head of fibula.",
            function: "Flexes the knee and extends the hip."
        },
        injuries: {
            common: "Strains and tears due to overstretching or explosive movements.",
            prevention: "Warm-up properly and include eccentric hamstring exercises.",
            treatment: "Rest, ice, compression, and rehab exercises."
        },
        exercises: ["Romanian deadlift", "Hamstring curl", "Nordic curl"]
    },
    {
        name: "Semitendinosus",
        displayName: "Semitendinosus",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Ischial tuberosity.",
            insertion: "Upper part of tibia.",
            function: "Knee flexion and medial rotation, hip extension."
        },
        injuries: {
            common: "Strains common in sprinting sports.",
            prevention: "Stretching and progressive load training.",
            treatment: "Rest and gradual return to activity."
        },
        exercises: ["Glute bridge", "Lying leg curl"]
    },
    {
        name: "Semimembranosus",
        displayName: "Semimembranosus",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Ischial tuberosity.",
            insertion: "Medial tibial condyle.",
            function: "Hip extension, knee flexion, and medial rotation."
        },
        injuries: {
            common: "Strains from improper warm-up.",
            prevention: "Eccentric hamstring work, mobility training.",
            treatment: "Ice, rest, rehab exercises."
        },
        exercises: ["Deadlifts", "Hip thrusts"]
    },
    {
        name: "Latissimus_dorsi",
        displayName: "Latissimus dorsi",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Lower spine and iliac crest.",
            insertion: "Upper humerus.",
            function: "Shoulder extension, adduction, and medial rotation."
        },
        injuries: {
            common: "Tendinitis from overuse (e.g. pull-ups, rows).",
            prevention: "Proper warm-up and rest.",
            treatment: "Physiotherapy and load management."
        },
        exercises: ["Pull-ups", "Bent-over rows", "Lat pulldowns"]
    },
    {
        name: "Adductor_brevis",
        displayName: "Adductor brevis",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Inferior pubic ramus",
            insertion: "Linea aspera of femur",
            function: "Hip adduction and flexion"
        },
        injuries: {
            common: "Groin pulls from sudden movement",
            prevention: "Adductor strengthening, dynamic warm-up",
            treatment: "Rest, ice, mobility"
        },
        exercises: ["Sumo squats", "Copenhagen plank"]
    },

   {
        name: "Adductor_longus",
        displayName: "Adductor longus",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Pubis",
            insertion: "Middle third of linea aspera",
            function: "Hip adduction and medial rotation"
        },
        injuries: {
            common: "Common in soccer-related groin injuries",
            prevention: "Gradual load progression",
            treatment: "Adductor rehab programs"
        },
        exercises: ["Adduction machine", "Lateral lunges"]
    },
    {
        name: "Adductor_magnus",
        displayName: "Adductor magnus",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Ischial tuberosity and pubis",
            insertion: "Linea aspera and adductor tubercle",
            function: "Adduction, extension, and flexion of hip"
        },
        injuries: {
            common: "Overuse in athletes",
            prevention: "Eccentric loading & mobility",
            treatment: "Massage, foam rolling, rehab"
        },
        exercises: ["Cable adductions", "Split squats"]
    },
    {
        name: "Gracilis",
        displayName: "Gracilis",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Inferior pubic ramus",
            insertion: "Medial surface of tibia",
            function: "Hip adduction and knee flexion"
        },
        injuries: {
            common: "Tightness and weakness from inactivity",
            prevention: "Stretching and activation",
            treatment: "Mobility work and foam rolling"
        },
        exercises: ["Side-lying leg lifts", "Adductor stretch"]
    },
    {
        name: "Pectineus",
        displayName: "Pectineus",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Superior pubic ramus",
            insertion: "Pectineal line of femur",
            function: "Adducts and flexes hip"
        },
        injuries: {
            common: "Often affected in groin strains",
            prevention: "Proper warm-up and control work",
            treatment: "Stretching and rehab strengthening"
        },
        exercises: ["Standing hip adduction", "Side step-ups"]
    },

    // --- CALVES ---
    {
        name: "Calves",
        displayName: "Calves",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Femoral condyles",
            insertion: "Calcaneus via Achilles tendon",
            function: "Plantarflexes the foot"
        },
        injuries: {
            common: "Tightness, Achilles tendinitis",
            prevention: "Eccentric calf raises, mobility",
            treatment: "Ice, stretch, heel drops"
        },
        exercises: ["Standing calf raise", "Seated calf raise"]
    },

    // --- HIP FLEXORS ---
    {
        name: "Iliacus",
        displayName: "Iliacus",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Iliac fossa",
            insertion: "Lesser trochanter of femur",
            function: "Flexes the hip joint"
        },
        injuries: {
            common: "Tightness from prolonged sitting",
            prevention: "Dynamic stretching, core training",
            treatment: "Stretching, hip mobility drills"
        },
        exercises: ["Hanging leg raises", "Hip marches"]
    },
    {
        name: "Psoas_major",
        displayName: "Psoas major",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Lumbar vertebrae",
            insertion: "Lesser trochanter of femur",
            function: "Powerful hip flexion"
        },
        injuries: {
            common: "Low back tightness, anterior pelvic tilt",
            prevention: "Postural training, mobility",
            treatment: "Stretching and strengthening core"
        },
        exercises: ["Leg raises", "High knees"]
    },
    {
        name: "Sartorius",
        displayName: "Sartorius",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Anterior superior iliac spine",
            insertion: "Medial surface of tibia",
            function: "Flexes hip and knee, laterally rotates thigh"
        },
        injuries: {
            common: "Rare injuries, sometimes strain in athletes",
            prevention: "Balanced flexibility and strength",
            treatment: "Mobility, stretching, light strengthening"
        },
        exercises: ["Leg lifts", "Hip flexion with resistance band"]
    },
    // --- UPPER BODY START ---
  {
        name: "Abductor_pollicis_longus",
        displayName: "Abductor pollicis longus",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Posterior surfaces of radius and ulna",
            insertion: "Base of the first metacarpal",
            function: "Abducts and extends the thumb"
        },
        injuries: {
            common: "De Quervain's tenosynovitis",
            prevention: "Avoid repetitive thumb movements",
            treatment: "Splinting, anti-inflammatory treatment"
        },
        exercises: ["Thumb abduction with resistance band"]
    },
    {
        name: "Abs",
        displayName: "Abs",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Pubic crest and symphysis",
            insertion: "Costal cartilages of ribs 5-7 and xiphoid process",
            function: "Trunk flexion and core stabilization"
        },
        injuries: {
            common: "Muscle strains from overuse or twisting",
            prevention: "Core conditioning and proper form",
            treatment: "Rest, gentle stretching"
        },
        exercises: ["Crunches", "Leg raises", "Planks"]
    },
    {
        name: "Anconeus",
        displayName: "Anconeus",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Lateral epicondyle of the humerus",
            insertion: "Olecranon and posterior ulna",
            function: "Assists in elbow extension"
        },
        injuries: {
            common: "Rarely injured; occasional soreness from elbow use",
            prevention: "Gradual load increase",
            treatment: "Rest and ice"
        },
        exercises: ["Triceps pushdown", "Dips"]
    },
    {
        name: "Biceps_brachii",
        displayName: "Biceps brachii",
        path: "/upperbody2.glb",
        anatomy: {
            location: "Anterior upper arm (front of humerus)",
            origin: "Scapula (short head: coracoid process; long head: supraglenoid tubercle)",
            insertion: "Radial tuberosity",
            function: "Elbow flexion and forearm supination",
            innervation: "Musculocutaneous nerve (C5–C7)",
            bloodSupply: "Brachial artery",
            synergists: "Brachialis, Brachioradialis",
            antagonists: "Triceps brachii"
        },
        injuries: {
            common: "tendinitis of distale ruptuur",
            prevention: "juiste belasting en warming-up",
            treatment: "rust, ijs of operatie bij scheuring",
            specific: [
                {
                    name: "Distale bicepsruptuur",
                    description: "Een scheuring van de pees die de biceps met de onderarm verbindt. Komt vaak voor bij plotselinge krachtinspanning, zoals bij zwaar tillen."
                },
                {
                    name: "Biceps tendinitis",
                    description: "Een ontsteking van de lange bicepspees. Meestal veroorzaakt door herhaalde overbelasting of slechte techniek bij trekken/duwen."
                }
            ],
            recognitionTips: [
                "Pijn aan de voorzijde van de elleboog of schouder",
                "Krachtverlies bij het buigen van de arm",
                "Zichtbare bult bij een peesscheur (Popeye sign)",
                "Klik- of knakgeluid bij scheuring"
            ],
            rehabEx: [
                {
                    name: "Bicep Curl met lichte weerstand",
                    link: "/exercises/bicep-curl"
                },
                {
                    name: "Isometrische bicepsactivatie",
                    link: "/exercises/isometric-biceps"
                }
            ],
            faq: [
                {
                    q: "Mag ik trainen met biceps tendinitis?",
                    a: "Vermijd pijnlijke bewegingen. Train licht, gefocust op mobiliteit en herstel. Raadpleeg een professional bij twijfel."
                },
                {
                    q: "Helpt rekken bij een gescheurde biceps?",
                    a: "Nee, rekken wordt afgeraden bij acute scheuringen. Laat het eerst professioneel beoordelen."
                }
            ]
        },

        exercises: [
            {
                name: "Bicep Curl",
                description: "An isolation exercise that directly targets the biceps. By flexing the elbow under load using dumbbells or barbells, it strengthens and builds size in the upper arm."
            },
            {
                name: "Chin-ups",
                description: "A bodyweight compound exercise where the biceps assist in pulling the body up, especially when using a supinated (palms facing you) grip. Great for strength and endurance."
            }
        ]

    },
    {
        name: "Brachialis",
        displayName: "Brachialis",
        path: "/upperbody2.glb",
        anatomy: {
            location: "Deep to the biceps brachii, anterior side of the humerus",
            origin: "Distal half of anterior surface of the humerus",
            insertion: "Ulnar tuberosity and coronoid process of ulna",
            function: "Primary flexor of the elbow",
            innervation: "Musculocutaneous nerve (C5–C6), with minor contribution from radial nerve",
            bloodSupply: "Brachial artery and radial recurrent artery",
            synergists: "Biceps brachii, Brachioradialis",
            antagonists: "Triceps brachii"
        },
        injuries: {
            common: "Overuse strains from repeated pulling or heavy lifting, especially in exercises where the elbow remains flexed.",
            prevention: "Progressive overload and variation in grip to distribute stress. Strengthening supporting muscles like the biceps and brachioradialis can reduce risk.",
            treatment: "Soft tissue therapy, mobility work, and temporarily reducing high-stress movements. Gentle loading may be reintroduced during rehab."
        }
,
        exercises: [
            {
                name: "Hammer Curls",
                description: "A variation of the bicep curl where the palms face inward. This targets the brachialis muscle more directly and contributes to arm thickness."
            },
            {
                name: "Reverse Curls",
                description: "Performed with an overhand grip, reverse curls engage the brachialis and forearm muscles more than traditional curls."
            }
        ]

    }
,
    {
        name: "Brachioradialis",
        displayName: "Brachioradialis",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Lateral supracondylar ridge of humerus",
            insertion: "Styloid process of radius",
            function: "Flexes elbow, especially in mid-pronation"
        },
        injuries: {
            common: "Strains or soreness in forearm",
            prevention: "Grip variation and mobility",
            treatment: "Stretch and deep massage"
        },
        exercises: ["Reverse curls", "Hammer curls"]
    },
    {
        name: "Chest",
        displayName: "Chest (Pectoralis major/minor)",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Clavicle, sternum, costal cartilages",
            insertion: "Greater tubercle of humerus",
            function: "Adducts, flexes, and medially rotates the arm"
        },
        injuries: {
            common: "Tears from bench pressing",
            prevention: "Proper warm-up and controlled eccentric loading",
            treatment: "Rest, surgery if severe"
        },
        exercises: ["Bench press", "Push-ups", "Chest fly"]
    },
    {
        name: "Diaphragm",
        displayName: "Diaphragm",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Xiphoid process, lower ribs, lumbar vertebrae",
            insertion: "Central tendon",
            function: "Primary muscle for breathing"
        },
        injuries: {
            common: "Spasms, cramping from fatigue",
            prevention: "Breathing practice",
            treatment: "Stretching and breathing exercises"
        },
        exercises: ["Diaphragmatic breathing"]
    },
    {
        name: "Erector_spinae",
        displayName: "Erector spinae",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Spinous processes, sacrum, and iliac crest",
            insertion: "Ribs and cervical vertebrae",
            function: "Extends and laterally flexes spine"
        },
        injuries: {
            common: "Low back strains",
            prevention: "Posterior chain strengthening",
            treatment: "Mobility and stability work"
        },
        exercises: ["Back extensions", "Deadlifts"]
    },
    {
        name: "Extensors",
        displayName: "Wrist and finger extensors",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Lateral epicondyle of humerus",
            insertion: "Metacarpals and phalanges",
            function: "Extend wrist and fingers"
        },
        injuries: {
            common: "Tennis elbow (lateral epicondylitis)",
            prevention: "Forearm balancing",
            treatment: "Stretching, isometrics, eccentric rehab"
        },
        exercises: ["Wrist extensions", "Reverse curls"]
    },
    
    {
        name: "Serratus_anterior",
        displayName: "Serratus anterior",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Ribs 1–8",
            insertion: "Medial border of scapula",
            function: "Protracts and stabilizes scapula"
        },
        injuries: {
            common: "Winged scapula from weakness",
            prevention: "Scapular push-ups and wall slides",
            treatment: "Strengthening and neuromuscular work"
        },
        exercises: ["Wall slides", "Push-up plus"]
    },
    {
        name: "Serratus_posterior_inferior",
        displayName: "Serratus posterior inferior",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Spinous processes of T11–L2",
            insertion: "Lower ribs 9–12",
            function: "Depresses ribs during exhalation"
        },
        injuries: {
            common: "Strain from heavy breathing or lifting",
            prevention: "Posture training",
            treatment: "Stretching and massage"
        },
        exercises: ["Deep breathing", "Thoracic mobility"]
    },
    {
        name: "Teres_major",
        displayName: "Teres major",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Inferior angle of scapula",
            insertion: "Intertubercular groove of humerus",
            function: "Adducts, extends, and medially rotates arm"
        },
        injuries: {
            common: "Overuse in pulling movements",
            prevention: "Balanced upper body training",
            treatment: "Soft tissue release"
        },
        exercises: ["Straight-arm pulldown"]
    },
    {
        name: "Teres_minor",
        displayName: "Teres minor",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Lateral border of scapula",
            insertion: "Greater tubercle of humerus",
            function: "Lateral rotation and stabilization of arm"
        },
        injuries: {
            common: "Rotator cuff irritation",
            prevention: "Cuff strengthening",
            treatment: "Band work, massage"
        },
        exercises: ["Side-lying external rotation"]
    },
    {
        name: "Torso",
        displayName: "Torso",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Various spinal and abdominal attachments",
            insertion: "Ribs, pelvis, and vertebrae",
            function: "Trunk support and movement"
        },
        injuries: {
            common: "General core weakness or strain",
            prevention: "Core training",
            treatment: "Stability drills"
        },
        exercises: ["Dead bug", "Bird dog"]
    },
    {
        name: "Transverse_abdominis",
        displayName: "Transverse abdominis",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Iliac crest, inguinal ligament, lumbar fascia",
            insertion: "Linea alba",
            function: "Compresses abdominal contents"
        },
        injuries: {
            common: "Pelvic instability or low back pain",
            prevention: "Core activation work",
            treatment: "Deep core strengthening"
        },
        exercises: ["Plank", "Vacuum hold"]
    },
    {
        name: "Traps",
        displayName: "Trapezius",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Occipital bone, C7–T12 vertebrae",
            insertion: "Clavicle, acromion, and scapula",
            function: "Elevates, retracts, depresses scapula"
        },
        injuries: {
            common: "Tightness or postural fatigue",
            prevention: "Postural strength and mobility",
            treatment: "Stretch, massage, mobility"
        },
        exercises: ["Shrugs", "Face pulls"]
    },
    {
        name: "Triceps_brachii",
        displayName: "Triceps brachii",
        path: "/upperbody2.glb",
        anatomy: {
            location: "Posterior upper arm",
            origin: "Long head: infraglenoid tubercle of scapula; lateral and medial heads: posterior humerus",
            insertion: "Olecranon process of the ulna",
            function: "Elbow extension and assists in shoulder extension",
            innervation: "Radial nerve (C6–C8)",
            bloodSupply: "Deep brachial artery",
            synergists: "Anconeus",
            antagonists: "Biceps brachii, Brachialis"
        },
        injuries: {
            common: "Tendinitis or strains from heavy pushing exercises like bench presses, dips, or overhead extensions.",
            prevention: "Progressive loading, proper warm-up, and avoiding excessive volume. Balanced training between pushing and pulling helps maintain joint health.",
            treatment: "Rest, ice, and activity modification. Physical therapy may be required in cases of persistent pain or partial tendon injury."
        },

        exercises: [
            {
                name: "Triceps Dips",
                description: "A compound movement that emphasizes elbow extension to target the triceps. Can be performed on parallel bars or benches, using bodyweight or added resistance."
            },
            {
                name: "Overhead Triceps Extension",
                description: "An isolation exercise where the triceps extend the elbow while the arms are overhead. Ideal for targeting the long head of the triceps."
            }
        ]

    }
,
    {
        name: "Rectus_femoris",
        description: "Part of the quadriceps, involved in knee extension and hip flexion.",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Anterior inferior iliac spine (AIIS)",
            insertion: "Patella and tibial tuberosity via patellar ligament",
            function: "Extends the knee and flexes the hip"
        },
        injuries: {
            common: "Strains due to sprinting or kicking",
            prevention: "Dynamic warm-up, controlled eccentric training",
            treatment: "Rest, ice, and gradual stretching"
        },
        exercises: ["Leg extension", "Squats", "Lunges"]
    },
    {
        name: "Vastus_intermedius",
        description: "Deep quadriceps muscle aiding in knee extension.",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Anterior and lateral surfaces of femur",
            insertion: "Patella and tibial tuberosity",
            function: "Knee extension"
        },
        injuries: {
            common: "Overuse from repetitive knee extension",
            prevention: "Progressive load training",
            treatment: "Rest, strengthening surrounding muscles"
        },
        exercises: ["Leg press", "Wall sits", "Step-ups"]
    },
    {
        name: "Vastus_lateralis",
        description: "Largest and most lateral of the quadriceps group.",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Greater trochanter and linea aspera of femur",
            insertion: "Patella and tibial tuberosity",
            function: "Knee extension"
        },
        injuries: {
            common: "Iliotibial band friction, lateral knee pain",
            prevention: "Stretching IT band and strengthening hips",
            treatment: "Foam rolling, targeted stretching"
        },
        exercises: ["Squats", "Step-ups", "Leg press"]
    },
    {
        name: "Vastus_medialis",
        description: "Medial quadriceps muscle important for knee stabilization.",
        path: "/lowerbody2.glb",
        anatomy: {
            origin: "Linea aspera of femur",
            insertion: "Patella and tibial tuberosity",
            function: "Knee extension and patellar stabilization"
        },
        injuries: {
            common: "Patellofemoral pain syndrome",
            prevention: "Strengthen hip abductors and glutes",
            treatment: "Corrective exercise, stretching"
        },
        exercises: ["Terminal knee extensions", "Leg press with toes out", "Step-downs"]
    },
    {
        name: "Front_delts",
        description: "Anterior part of the deltoid, responsible for shoulder flexion.",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Lateral third of clavicle",
            insertion: "Deltoid tuberosity of humerus",
            function: "Shoulder flexion and internal rotation"
        },
        injuries: {
            common: "Impingement due to overuse",
            prevention: "Proper form in pressing exercises",
            treatment: "Rest, mobility work"
        },
        exercises: ["Front raises", "Overhead press", "Arnold press"]
    },
    {
        name: "Side_delts",
        description: "Lateral deltoid head involved in shoulder abduction.",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Acromion of scapula",
            insertion: "Deltoid tuberosity of humerus",
            function: "Shoulder abduction"
        },
        injuries: {
            common: "Deltoid strain from heavy lateral raises",
            prevention: "Progressive overload and proper technique",
            treatment: "Massage, rest, light range-of-motion work"
        },
        exercises: ["Lateral raises", "Upright rows", "Cable abductions"]
    },
    {
        name: "Rear_delts",
        description: "Posterior deltoid important for shoulder extension and external rotation.",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Spine of scapula",
            insertion: "Deltoid tuberosity of humerus",
            function: "Shoulder extension and external rotation"
        },
        injuries: {
            common: "Overuse or imbalance with front delts",
            prevention: "Balanced training including posterior chain",
            treatment: "Face pulls, soft tissue work"
        },
        exercises: ["Reverse fly", "Face pulls", "Rear delt rows"]
    },
    {
        name: "Rhomboid_major",
        description: "Retracts the scapula and stabilizes the shoulder blade.",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Spinous processes of T2–T5 vertebrae",
            insertion: "Medial border of scapula",
            function: "Scapular retraction and stabilization"
        },
        injuries: {
            common: "Tightness or knots from poor posture",
            prevention: "Postural awareness and regular movement",
            treatment: "Massage, mobility, corrective exercises"
        },
        exercises: ["Rows", "Scapular retractions", "Face pulls"]
    },
    {
        name: "Rhomboid_minor",
        description: "Assists rhomboid major in scapular retraction.",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Spinous processes of C7–T1",
            insertion: "Medial border of scapula above rhomboid major",
            function: "Scapular elevation and retraction"
        },
        injuries: {
            common: "Muscle spasms from prolonged sitting",
            prevention: "Stretching and upper back engagement",
            treatment: "Heat, soft tissue release"
        },
        exercises: ["Band pull-aparts", "Row variations", "T-spine mobility work"]
    },
    {
        name: "Infraspinatus",
        description: "Part of the rotator cuff, responsible for external shoulder rotation.",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Infraspinous fossa of scapula",
            insertion: "Greater tubercle of humerus",
            function: "External rotation and shoulder stabilization"
        },
        injuries: {
            common: "Rotator cuff strain or tear",
            prevention: "Rotator cuff strengthening and mobility",
            treatment: "Physical therapy, isolated rehab exercises"
        },
        exercises: ["External rotations", "Face pulls", "Cuban press"]
    }
];

export default muscles;



