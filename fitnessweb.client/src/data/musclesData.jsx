const muscles = [
//                // HAMSTRINGS
//    {
//        name: "Biceps_femoris",
//        displayName: "Biceps femoris",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Long head from the ischial tuberosity; short head from the linea aspera of the femur.",
//            insertion: "Head of the fibula.",
//            function: "Knee flexion, hip extension (long head), and lateral rotation of the knee when flexed.",
//            innervation: "Long head: Tibial part of sciatic nerve; short head: Common fibular nerve (L5–S2)",
//            bloodSupply: "Perforating branches of the profunda femoris artery",
//            synergists: "Gluteus maximus (hip extension), semitendinosus, semimembranosus",
//            antagonists: "Quadriceps, iliopsoas"
//        },
//        injuries: {
//            common: "Hamstring strain due to sudden sprinting or overstretching.",
//            prevention: "Eccentric training (e.g., Nordic curls), proper sprint mechanics, mobility work.",
//            treatment: "Initial rest and ice, followed by progressive strengthening and flexibility work.",
//            specific: [
//                {
//                    name: "Hamstring Strain (Type I)",
//                    description: "Typically occurs during high-speed running; affects the long head of the biceps femoris."
//                },
//                {
//                    name: "Tendon Avulsion",
//                    description: "Severe cases where the tendon detaches from the bone; often requires surgical intervention."
//                }
//            ],
//            recognitionTips: [
//                "Sharp pain during sprinting or jumping",
//                "Swelling or bruising at the back of the thigh",
//                "Pain when flexing the knee or stretching the hamstring"
//            ],
//            rehabEx: [
//                "Nordic hamstring curls",
//                "Romanian deadlifts",
//                "Isometric bridge holds"
//            ],
//            faq: [
//                {
//                    q: "Can I run with a hamstring strain?",
//                    a: "Not recommended — running can worsen the injury. Focus on rehab and progressive loading first."
//                },
//                {
//                    q: "Do hamstrings need direct stretching daily?",
//                    a: "Not necessarily — mobility work and eccentric loading are more effective for long-term health."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Romanian Deadlift",
//                description: "Hip-hinge movement that loads the hamstrings through a deep stretch under control."
//            },
//            {
//                name: "Nordic Curl",
//                description: "Eccentric-focused exercise shown to reduce hamstring injury risk significantly."
//            },
//            {
//                name: "Hamstring Curl Machine",
//                description: "Isolates the hamstrings through knee flexion — best used for hypertrophy or rehab."
//            }
//        ]
//    }
//,
//    {
//        name: "Semitendinosus",
//        displayName: "Semitendinosus",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Ischial tuberosity.",
//            insertion: "Proximal medial surface of tibia (part of pes anserinus).",
//            function: "Hip extension, knee flexion, and medial rotation of the leg when knee is flexed.",
//            innervation: "Tibial portion of the sciatic nerve (L5–S2)",
//            bloodSupply: "Inferior gluteal artery and perforating branches of profunda femoris",
//            synergists: "Semimembranosus, biceps femoris (long head)",
//            antagonists: "Quadriceps group"
//        },
//        injuries: {
//            common: "Overstretching or strain from sprinting or improper warm-up.",
//            prevention: "Dynamic warm-ups, controlled eccentric loading, and hamstring activation drills.",
//            treatment: "Rest, ice, followed by targeted stretching and strength progression.",
//            specific: [
//                {
//                    name: "Proximal Hamstring Tendinopathy",
//                    description: "Pain near the glute due to overuse or poor loading control."
//                },
//                {
//                    name: "Semitendinosus Strain",
//                    description: "Tear or overstretching of the muscle belly during running or kicking."
//                }
//            ],
//            recognitionTips: [
//                "Pain near the upper back of the thigh",
//                "Discomfort when sitting or stretching",
//                "Tenderness near the ischial tuberosity"
//            ],
//            rehabEx: [
//                "Single-leg glute bridges",
//                "Slow hamstring curls",
//                "Reverse lunges with controlled tempo"
//            ],
//            faq: [
//                {
//                    q: "Should I massage a hamstring strain?",
//                    a: "Only after the acute phase. Light massage can promote healing, but avoid deep pressure early on."
//                },
//                {
//                    q: "How long does a hamstring strain take to heal?",
//                    a: "Mild strains may resolve in 2–3 weeks, while more severe ones may take 6–8+ weeks."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Glute Bridge",
//                description: "Activates both glutes and hamstrings — great for warm-up or rehab work."
//            },
//            {
//                name: "Lying Hamstring Curl",
//                description: "Isolates the semitendinosus with minimal hip involvement."
//            },
//            {
//                name: "Good Morning",
//                description: "Builds posterior chain strength and eccentric control in hamstrings."
//            }
//        ]
//    }
//,
//{
//    name: "Semimembranosus",
//        displayName: "Semimembranosus",
//            path: "/lowerbody2.glb",
//                anatomy: {
//        origin: "Ischial tuberosity.",
//            insertion: "Posterior part of medial condyle of tibia.",
//                function: "Hip extension, knee flexion, and medial rotation of the leg when flexed.",
//                innervation: "Tibial part of the sciatic nerve (L5–S2)",
//                    bloodSupply: "Perforating branches of profunda femoris artery",
//                        synergists: "Semitendinosus, biceps femoris",
//                            antagonists: "Quadriceps, tensor fasciae latae"
//    },
//    injuries: {
//        common: "Strain or overstretching from sprinting, lunging, or deep hip flexion.",
//            prevention: "Progressive overload, posterior chain strengthening, and mobility work.",
//                treatment: "Early phase rest, followed by eccentrics and neuromuscular control drills.",
//                    specific: [
//                        {
//                            name: "High Hamstring Strain",
//                            description: "Common during sprinting or overstretching — affects semimembranosus more due to deeper fiber orientation."
//                        },
//                        {
//                            name: "Ischial Tuberosity Avulsion",
//                            description: "Rare but serious detachment from the pelvis in explosive sports or poor mechanics."
//                        }
//                    ],
//                        recognitionTips: [
//                            "Deep ache in upper posterior thigh",
//                            "Pain in hip flexion or forward bends",
//                            "Tightness or pull sensation near glute area"
//                        ],
//                            rehabEx: [
//                                "Stiff-leg deadlifts",
//                                "Hamstring walkouts",
//                                "Kettlebell swings (light to moderate)"
//                            ],
//                                faq: [
//                                    {
//                                        q: "Is semimembranosus injury the same as a regular hamstring strain?",
//                                        a: "It’s part of the hamstrings but tends to be deeper and slower to heal due to its structure."
//                                    },
//                                    {
//                                        q: "Can I squat with a hamstring injury?",
//                                        a: "Not until full pain-free hip flexion is restored. Stick to isometrics early on."
//                                    }
//                                ]
//    },
//    exercises: [
//        {
//            name: "Deadlift",
//            description: "Trains the entire posterior chain including semimembranosus under load."
//        },
//        {
//            name: "Hip Thrust",
//            description: "Primarily targets glutes but engages hamstrings at the end range."
//        },
//        {
//            name: "Hamstring Walkouts",
//            description: "Great bodyweight eccentric exercise for regaining strength and control."
//        }
//    ]
//    }
//    // ADDUCTORS
//,
//    {
//        name: "Adductor_brevis",
//        displayName: "Adductor brevis",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Inferior pubic ramus.",
//            insertion: "Upper part of the linea aspera of the femur.",
//            function: "Hip adduction and flexion.",
//            innervation: "Obturator nerve (L2–L4)",
//            bloodSupply: "Obturator artery",
//            synergists: "Adductor longus, gracilis",
//            antagonists: "Gluteus medius, gluteus minimus"
//        },
//        injuries: {
//            common: "Minor strains or chronic tightness due to weak glutes or excessive sitting.",
//            prevention: "Glute strengthening and active stretching of the inner thigh.",
//            treatment: "Mobility work, trigger point release, and gradual loading.",
//            specific: [],
//            recognitionTips: [
//                "Tightness or pain in deep inner thigh",
//                "Reduced hip mobility during lateral movement",
//                "Pain during resisted hip adduction"
//            ],
//            rehabEx: [
//                "Side-lying leg lifts",
//                "Active hip circles",
//                "Adductor machine (light)"
//            ],
//            faq: [
//                {
//                    q: "Is adductor brevis visible?",
//                    a: "No — it's a deeper, smaller muscle beneath adductor longus."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Side-Lying Adduction",
//                description: "Simple bodyweight movement to activate deeper adductors."
//            },
//            {
//                name: "Adduction Machine",
//                description: "Targeted exercise to strengthen adductor brevis and longus together."
//            },
//            {
//                name: "Glute Bridge with Ball Squeeze",
//                description: "Combines hip extension and adduction for stability training."
//            }
//        ]
//    }
//,

//    {
//        name: "Adductor_longus",
//        displayName: "Adductor longus",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Body of the pubis.",
//            insertion: "Middle third of the linea aspera of the femur.",
//            function: "Hip adduction and medial rotation.",
//            innervation: "Obturator nerve (L2–L4)",
//            bloodSupply: "Obturator artery and medial circumflex femoral artery",
//            synergists: "Adductor brevis, adductor magnus, gracilis",
//            antagonists: "Gluteus medius, gluteus minimus"
//        },
//        injuries: {
//            common: "Groin strain from overstretching or sudden adduction force.",
//            prevention: "Adductor strengthening, dynamic warm-ups, and hip mobility.",
//            treatment: "Rest, ice, followed by gradual return with strengthening and mobility work.",
//            specific: [
//                {
//                    name: "Adductor Strain (Groin Pull)",
//                    description: "Often caused by sudden directional changes in sports like football or hockey."
//                }
//            ],
//            recognitionTips: [
//                "Pain in the inner thigh or groin during leg movement",
//                "Tenderness or tightness in adductor area",
//                "Discomfort when squeezing legs together"
//            ],
//            rehabEx: [
//                "Copenhagen side plank",
//                "Adduction with resistance band",
//                "Sumo squats"
//            ],
//            faq: [
//                {
//                    q: "Can I walk with a groin strain?",
//                    a: "Yes, if pain is mild — avoid aggressive movement and keep strides short."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Sumo Squat",
//                description: "Targets adductors by using a wide stance and deep range of motion."
//            },
//            {
//                name: "Copenhagen Plank",
//                description: "Isometric and dynamic adductor strengthener using bodyweight."
//            },
//            {
//                name: "Cable Hip Adduction",
//                description: "Direct isolation of the adductors using adjustable resistance."
//            }
//        ]
//    }
//,
//    {
//        name: "Adductor_magnus",
//        displayName: "Adductor magnus",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Inferior pubic ramus, ischial tuberosity.",
//            insertion: "Linea aspera and adductor tubercle of femur.",
//            function: "Hip adduction, extension, and medial rotation.",
//            innervation: "Obturator nerve and sciatic nerve (L2–L4, L5–S1)",
//            bloodSupply: "Obturator, femoral, and deep femoral arteries",
//            synergists: "Gluteus maximus (hip extension), other adductors",
//            antagonists: "Tensor fasciae latae, gluteus medius"
//        },
//        injuries: {
//            common: "Overuse or tightness from sitting or imbalance in hip muscles.",
//            prevention: "Posterior chain mobility, hip rotation drills, and adductor loading.",
//            treatment: "Myofascial release, mobility training, and gradual return to compound lifts.",
//            specific: [],
//            recognitionTips: [
//                "Tightness deep in the inner thigh or near groin",
//                "Pain during hip extension with adduction",
//                "Pulling sensation when squatting wide"
//            ],
//            rehabEx: [
//                "Kettlebell sumo deadlift",
//                "Deep lunge with hip rotation",
//                "Wall adduction holds"
//            ],
//            faq: [
//                {
//                    q: "Is adductor magnus involved in squatting?",
//                    a: "Yes — especially in wide-stance or sumo squats. It assists in hip extension and stabilization."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Sumo Deadlift",
//                description: "Engages the adductor magnus through hip extension in a wide stance."
//            },
//            {
//                name: "Adductor Lunge",
//                description: "Targets inner thigh and hip extensors in deep lateral range."
//            },
//            {
//                name: "Glute Bridge with Band Adduction",
//                description: "Builds adductor strength in combination with posterior chain activation."
//            }
//        ]
//    }
//    ,
//    {
//        name: "Gracilis",
//        displayName: "Gracilis",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Inferior pubic ramus.",
//            insertion: "Medial surface of tibia (part of pes anserinus).",
//            function: "Hip adduction and knee flexion.",
//            innervation: "Obturator nerve (L2–L3)",
//            bloodSupply: "Obturator artery",
//            synergists: "Adductor group, sartorius (for medial rotation and knee flexion)",
//            antagonists: "Gluteus medius, rectus femoris"
//        },
//        injuries: {
//            common: "Often tight or underused due to sitting or lack of direct training.",
//            prevention: "Hip mobility, dynamic stretching, and glute/adductor balancing.",
//            treatment: "Massage, foam rolling, and light adduction work.",
//            specific: [],
//            recognitionTips: [
//                "Discomfort or tightness along inner thigh to knee",
//                "Pain during hip adduction or medial rotation",
//                "Reduced control during lateral movements"
//            ],
//            rehabEx: [
//                "Adductor stretch with foot elevated",
//                "Side planks with adduction",
//                "Single-leg hip bridges"
//            ],
//            faq: [
//                {
//                    q: "Do I need to isolate the gracilis?",
//                    a: "Not necessarily — but if tight or weak, targeted rehab may help with knee control and mobility."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Lateral Lunge",
//                description: "Stretches and strengthens inner thigh through dynamic range."
//            },
//            {
//                name: "Cable Adduction",
//                description: "Allows controlled resistance through hip adduction range of motion."
//            },
//            {
//                name: "Side-Lying Adduction",
//                description: "Great bodyweight movement for activating gracilis and stabilizing hip/knee."
//            }
//        ]
//    },
//    {
//        name: "Pectineus",
//        displayName: "Pectineus",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Superior pubic ramus.",
//            insertion: "Pectineal line of femur.",
//            function: "Hip adduction and flexion.",
//            innervation: "Femoral nerve (L2–L3), sometimes obturator nerve",
//            bloodSupply: "Medial circumflex femoral artery",
//            synergists: "Adductor brevis, iliopsoas",
//            antagonists: "Gluteus medius, tensor fasciae latae"
//        },
//        injuries: {
//            common: "Tightness or strain from repetitive hip flexion or prolonged sitting.",
//            prevention: "Mobility training, hip strengthening, and dynamic warm-ups.",
//            treatment: "Release techniques and light adductor work.",
//            specific: [],
//            recognitionTips: [
//                "Tightness near groin or front inner thigh",
//                "Reduced hip flexion or abduction mobility",
//                "Stiffness during long sitting periods"
//            ],
//            rehabEx: [
//                "Hip adduction stretch",
//                "Light standing adduction with band",
//                "Wall ball squeeze"
//            ],
//            faq: [
//                {
//                    q: "Is pectineus a major mover?",
//                    a: "It’s a small but important stabilizer — especially in hip flexion and early swing phase of gait."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Standing Hip Adduction",
//                description: "Simple adduction movement with band or cable to engage the pectineus."
//            },
//            {
//                name: "Step-Up with Adduction Focus",
//                description: "Trains adduction through a functional hip extension movement."
//            },
//            {
//                name: "Wall Ball Squeeze",
//                description: "Activates the inner thigh and pectineus via isometric adduction."
//            }
//        ]
//    }
//,


//    // --- CALVES ---
//    {
//        name: "Calves",
//        displayName: "Calves",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Femoral condyles",
//            insertion: "Calcaneus via Achilles tendon",
//            function: "Plantarflexes the foot"
//        },
//        injuries: {
//            common: "Tightness, Achilles tendinitis",
//            prevention: "Eccentric calf raises, mobility",
//            treatment: "Ice, stretch, heel drops"
//        },
//        exercises: ["Standing calf raise", "Seated calf raise"]
//    },

//    // --- HIP FLEXORS ---
//    {
//        name: "Iliacus",
//        displayName: "Iliacus",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Iliac fossa of the pelvis.",
//            insertion: "Lesser trochanter of the femur (via iliopsoas tendon).",
//            function: "Hip flexion and stabilization of the pelvis during movement.",
//            innervation: "Femoral nerve (L2–L3)",
//            bloodSupply: "Iliolumbar artery",
//            synergists: "Psoas major, rectus femoris",
//            antagonists: "Gluteus maximus, hamstrings"
//        },
//        injuries: {
//            common: "Tightness or shortening from prolonged sitting; overuse in hip-dominant athletes.",
//            prevention: "Mobility work, dynamic warm-ups, and glute activation.",
//            treatment: "Stretching, myofascial release, and strength balance correction.",
//            specific: [],
//            recognitionTips: [
//                "Tight feeling at the front of the hip",
//                "Discomfort during long sitting or standing",
//                "Anterior pelvic tilt posture"
//            ],
//            rehabEx: [
//                "Hip flexor stretch (half-kneeling)",
//                "Glute bridge (for antagonist activation)",
//                "Dynamic lunges"
//            ],
//            faq: [
//                {
//                    q: "Is the iliacus involved in lower back pain?",
//                    a: "Yes — tight hip flexors can tilt the pelvis and pull on the lumbar spine."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "High Knees",
//                description: "Dynamic movement that engages and strengthens the iliacus during hip flexion."
//            },
//            {
//                name: "Hanging Leg Raise",
//                description: "Bodyweight core exercise that activates the iliacus through active hip flexion."
//            },
//            {
//                name: "Lunges",
//                description: "Improves hip mobility and activates both flexors and extensors."
//            }
//        ]
//    }
//,
//    {
//        name: "Psoas_major",
//        displayName: "Psoas major",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Transverse processes and vertebral bodies of T12–L5.",
//            insertion: "Lesser trochanter of the femur.",
//            function: "Strong hip flexor, contributes to lumbar spine stabilization.",
//            innervation: "Anterior rami of L1–L3",
//            bloodSupply: "Lumbar arteries",
//            synergists: "Iliacus, rectus femoris, sartorius",
//            antagonists: "Gluteus maximus, hamstrings"
//        },
//        injuries: {
//            common: "Tightness from sitting or weak core, leading to anterior pelvic tilt and back discomfort.",
//            prevention: "Postural awareness, glute/core balance, and active mobility training.",
//            treatment: "Hip mobility work, core stability training, and breathing drills.",
//            specific: [
//                {
//                    name: "Psoas Tightness Syndrome",
//                    description: "Tight and overactive psoas contributes to back pain and hip instability."
//                }
//            ],
//            recognitionTips: [
//                "Low back ache during standing or walking",
//                "Discomfort in deep hip flexion",
//                "Stiffness when extending the hip"
//            ],
//            rehabEx: [
//                "Active hip extension drills",
//                "90/90 breathing for pelvic alignment",
//                "Glute bridges"
//            ],
//            faq: [
//                {
//                    q: "Is the psoas a core muscle?",
//                    a: "Yes — it connects spine to femur and plays a stabilizing role in posture and movement."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Marching Hip Flexion",
//                description: "Strengthens the psoas with core control in a neutral pelvis."
//            },
//            {
//                name: "Leg Raises",
//                description: "Engages psoas during lower body movement — control is key."
//            },
//            {
//                name: "Reverse Lunge with Core Brace",
//                description: "Teaches hip extension and core activation to offset psoas tightness."
//            }
//        ]
//    }
//,
//    {
//        name: "Sartorius",
//        displayName: "Sartorius",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Anterior superior iliac spine (ASIS).",
//            insertion: "Medial surface of tibia (part of pes anserinus).",
//            function: "Flexes, abducts, and laterally rotates the hip; flexes the knee.",
//            innervation: "Femoral nerve (L2–L3)",
//            bloodSupply: "Femoral artery",
//            synergists: "Iliopsoas, rectus femoris, gracilis",
//            antagonists: "Gluteus maximus, adductors"
//        },
//        injuries: {
//            common: "Strain or tightness due to overuse in complex hip/knee movement patterns.",
//            prevention: "Warm-up before dynamic hip/knee motions; include multi-directional drills.",
//            treatment: "Stretching, myofascial release, and strengthening through full range.",
//            specific: [],
//            recognitionTips: [
//                "Discomfort along the inner thigh or near the ASIS",
//                "Pain during hip flexion with external rotation",
//                "Reduced control during multi-directional movement"
//            ],
//            rehabEx: [
//                "Lunge with hip rotation",
//                "Lateral leg swings",
//                "Step-up with external hip rotation"
//            ],
//            faq: [
//                {
//                    q: "Is sartorius important in athletic movement?",
//                    a: "Yes — it helps coordinate multi-plane hip and knee motion, especially in agility-based sports."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Step-Up with Rotation",
//                description: "Simulates multi-directional hip motion to activate sartorius functionally."
//            },
//            {
//                name: "Lunge with Twist",
//                description: "Combines hip/knee flexion with rotation for functional control."
//            },
//            {
//                name: "Tailor Stretch",
//                description: "Targets sartorius flexibility and helps open hips."
//            }
//        ]
//    }
//,
//    // --- UPPER BODY  ---
//  {
//        name: "Abductor_pollicis_longus",
//        displayName: "Abductor pollicis longus",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Posterior surfaces of radius and ulna",
//            insertion: "Base of the first metacarpal",
//            function: "Abducts and extends the thumb"
//        },
//        injuries: {
//            common: "De Quervain's tenosynovitis",
//            prevention: "Avoid repetitive thumb movements",
//            treatment: "Splinting, anti-inflammatory treatment"
//        },
//        exercises: ["Thumb abduction with resistance band"]
//    },
//    {
//        name: "Abs",
//        displayName: "Abs",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Pubic crest and symphysis",
//            insertion: "Costal cartilages of ribs 5-7 and xiphoid process",
//            function: "Trunk flexion and core stabilization"
//        },
//        injuries: {
//            common: "Muscle strains from overuse or twisting",
//            prevention: "Core conditioning and proper form",
//            treatment: "Rest, gentle stretching"
//        },
//        exercises: ["Crunches", "Leg raises", "Planks"]
//    },
//                    // LOWER ARM
//    {
//        name: "Anconeus",
//        displayName: "Anconeus",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Lateral epicondyle of the humerus",
//            insertion: "Olecranon and posterior ulna",
//            function: "Assists in elbow extension"
//        },
//        injuries: {
//            common: "Rarely injured; occasional soreness from elbow use",
//            prevention: "Gradual load increase",
//            treatment: "Rest and ice"
//        },
//        exercises: ["Triceps pushdown", "Dips"]
//    },
//    {
//        name: "Flexors",
//        displayName: "Wrist and finger flexors",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Medial epicondyle of the humerus and adjacent ulna/radius.",
//            insertion: "Palmar surfaces of metacarpals and phalanges.",
//            function: "Flexes the wrist and fingers; supports grip and forearm control.",
//            innervation: "Median and ulnar nerves (C6–T1)",
//            bloodSupply: "Ulnar and anterior interosseous arteries",
//            synergists: "Flexor carpi radialis, palmaris longus, flexor digitorum muscles",
//            antagonists: "Extensors of the wrist and fingers"
//        },
//        injuries: {
//            common: "Tendinopathy due to excessive gripping or keyboard/mouse overuse — also called 'golfer’s elbow'.",
//            prevention: "Balanced grip training, regular mobility, and active rest.",
//            treatment: "Soft tissue work, eccentric flexion drills, and load management.",
//            specific: [
//                {
//                    name: "Medial Epicondylitis (Golfer’s Elbow)",
//                    description: "Inflammation or strain of the flexor tendon group from overuse or repetitive gripping."
//                }
//            ],
//            recognitionTips: [
//                "Pain on inner elbow with grip or wrist flexion",
//                "Weakness when holding or squeezing objects",
//                "Tightness in forearm after long use"
//            ],
//            rehabEx: [
//                "Wrist flexor stretch",
//                "Isometric grip squeezes",
//                "Eccentric wrist curls"
//            ],
//            faq: [
//                {
//                    q: "How can I strengthen weak grip?",
//                    a: "Train both flexors and extensors with controlled volume and add fat-grip or towel holds."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Wrist Curl",
//                description: "Isolates forearm flexors through flexion and controlled lowering."
//            },
//            {
//                name: "Farmer's Carry",
//                description: "Grip-intensive hold that activates flexors dynamically under load."
//            },
//            {
//                name: "Towel Pull-Up (Assisted)",
//                description: "Challenging flexor and grip strength variation for climbers or athletes."
//            }
//        ]
//    },
//    {
//        name: "Extensors",
//        displayName: "Wrist and finger extensors",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Lateral epicondyle of the humerus and adjacent structures.",
//            insertion: "Posterior surfaces of metacarpals and phalanges.",
//            function: "Extension of the wrist, fingers, and thumb. Assists in grip and hand positioning.",
//            innervation: "Radial nerve (C6–C8)",
//            bloodSupply: "Radial and posterior interosseous arteries",
//            synergists: "Extensor carpi ulnaris, extensor digitorum, extensor indicis",
//            antagonists: "Wrist/finger flexors"
//        },
//        injuries: {
//            common: "Overuse in gripping or repetitive motion sports — classic 'tennis elbow' or lateral epicondylitis.",
//            prevention: "Forearm balance training, proper ergonomics, and wrist mobility.",
//            treatment: "Rest, eccentric wrist extensions, and isometrics.",
//            specific: [
//                {
//                    name: "Lateral Epicondylitis (Tennis Elbow)",
//                    description: "Pain and inflammation of the extensor tendons near the lateral elbow from overuse."
//                }
//            ],
//            recognitionTips: [
//                "Outer elbow pain during gripping or lifting",
//                "Tenderness near lateral epicondyle",
//                "Weak grip strength"
//            ],
//            rehabEx: [
//                "Eccentric wrist extensions",
//                "Isometric holds",
//                "Wrist mobility drills"
//            ],
//            faq: [
//                {
//                    q: "Can I still train with tennis elbow?",
//                    a: "Light isometrics and pain-free movement can help healing — avoid aggravating loads."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Reverse Curl",
//                description: "Trains extensors and brachioradialis through pronated forearm flexion."
//            },
//            {
//                name: "Wrist Extension with Dumbbell",
//                description: "Targets wrist extensors with slow eccentric emphasis."
//            },
//            {
//                name: "Wrist Roller (Reverse)",
//                description: "Builds forearm endurance and strength through extension."
//            }
//        ]
//    },



//                    // UPPER ARM
    {
        name: "Biceps_brachii",
        displayName: "Biceps brachii",
        path: "/upperbody2.glb",
        anatomy: {
            location: "Anterior upper arm (front of humerus)",
            origin: "Scapula (short head: coracoid process; long head: supraglenoid tubercle)",
            insertion: "Radial tuberosity",
            function: "Elbow flexion and forearm supination",
            innervation: "Musculocutaneous nerve (C5-C7)",
            bloodSupply: "Brachial artery",
            synergists: "Brachialis, Brachioradialis",
            antagonists: "Triceps brachii",
            originImg: "/images/biceps-origin.png",
            insertionImg: "/images/biceps-insertion.png",
            Animation: "/animations/biceps.glb"


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
        name: "Triceps_brachii",
        displayName: "Triceps brachii",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Long head from infraglenoid tubercle of scapula; lateral and medial heads from posterior humerus above and below the radial groove.",
            insertion: "Olecranon of ulna",
            function: "Elbow extension and stabilization of the elbow joint during forearm movement.",
            innervation: "Radial nerve (C6-C8)",
            bloodSupply: "Deep brachial artery",
            synergists: "Anconeus, pectoralis major (during pressing movements)",
            antagonists: "Biceps brachii, brachialis"
        },
        injuries: {
            common: "Tendinitis or partial rupture from overuse during pushing or throwing.",
            prevention: "Controlled eccentric loading, proper technique in pressing, and balanced pushing-pulling routines.",
            treatment: "Rest, gradual strengthening, and physiotherapy. Severe cases may need surgery.",
            specific: [
                {
                    name: "Triceps Tendinitis",
                    description: "Inflammation due to repetitive strain, especially from heavy pressing or throwing motions."
                },
                {
                    name: "Triceps Rupture",
                    description: "Partial or full tear often caused by sudden overload; leads to weakness in elbow extension."
                }
            ],
            recognitionTips: [
                "Pain at the back of the elbow during extension",
                "Swelling or bruising around the triceps tendon",
                "Weakness when extending the elbow under load",
                "Possible snapping sound during injury"
            ],
            rehabEx: [
                "Isometric triceps holds",
                "Cable pushdowns with light weight",
                "Overhead triceps extensions (slow eccentric focus)"
            ],
            faq: [
                {
                    q: "Should I stretch my triceps if I have tendinitis?",
                    a: "Gentle stretching may help, but avoid overstretching an inflamed tendon. Focus on mobility + controlled loading."
                },
                {
                    q: "Can I train biceps while recovering from a triceps injury?",
                    a: "Yes, as long as there's no pain or compensation at the elbow. Monitor carefully."
                }
            ]
        },
        exercises: [
            {
                name: "Triceps Pushdown",
                description: "A controlled cable movement that isolates the triceps and helps reinforce elbow extension strength."
            },
            {
                name: "Overhead Triceps Extension",
                description: "Targets the long head of the triceps and improves arm stability in overhead pressing."
            },
            {
                name: "Close-Grip Bench Press",
                description: "A compound movement emphasizing triceps while also involving the chest and shoulders."
            }
        ]
    },
    {
        name: "Brachialis",
        displayName: "Brachialis",
        path: "/upperbody2.glb",
        anatomy: {
            origin: "Distal half of the anterior surface of the humerus.",
            insertion: "Ulnar tuberosity and coronoid process of the ulna.",
            function: "Primary flexor of the elbow joint, regardless of forearm position.",
            innervation: "Musculocutaneous nerve (C5-C6)",
            bloodSupply: "Brachial artery, recurrent radial artery",
            synergists: "Biceps brachii, brachioradialis",
            antagonists: "Triceps brachii, anconeus"
        },
        injuries: {
            common: "Strain or overuse from excessive pulling movements or heavy curls.",
            prevention: "Progressive loading, balanced pulling movements, and proper warm-up of elbow flexors.",
            treatment: "Rest, ice, gentle stretching, and gradual return to training. Severe cases may need rehab exercises.",
            specific: [
                {
                    name: "Brachialis Strain",
                    description: "A tear or microtrauma in the muscle due to excessive eccentric load or overuse in pulling motions."
                },
                {
                    name: "Overuse Tendinopathy",
                    description: "Chronic pain near the elbow from repetitive flexion under load, common in athletes and lifters."
                }
            ],
            recognitionTips: [
                "Deep aching pain in the middle of the upper arm",
                "Pain when flexing the elbow, especially with a neutral or pronated grip",
                "Tenderness to touch on the lower front of the humerus",
                "Possible tightness or inflammation after training biceps"
            ],
            rehabEx: [
                "Hammer curls with light dumbbells",
                "Isometric elbow flexion holds",
                "Eccentric-only bicep curls (lowering phase focus)"
            ],
            faq: [
                {
                    q: "Is the brachialis the same as the biceps?",
                    a: "No — the brachialis lies underneath the biceps and is actually a stronger elbow flexor."
                },
                {
                    q: "Can I still train arms with a brachialis injury?",
                    a: "Yes, but only with light intensity and pain-free movements. Avoid heavy curls until symptoms subside."
                }
            ]
        },
        exercises: [
            {
                name: "Hammer Curl",
                description: "A neutral grip curl that heavily targets the brachialis along with the brachioradialis."
            },
            {
                name: "Reverse Curl",
                description: "Emphasizes the brachialis and forearms by limiting biceps activation through a pronated grip."
            },
            {
                name: "Zottman Curl",
                description: "Combines supination and pronation to train biceps on the way up and brachialis on the way down."
            }
        ]
    }

//,
//    {
//        name: "Brachioradialis",
//        displayName: "Brachioradialis",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Lateral supracondylar ridge of the humerus.",
//            insertion: "Styloid process of the radius.",
//            function: "Flexes the elbow, especially when the forearm is in a neutral (hammer) position.",
//            innervation: "Radial nerve (C5–C6)",
//            bloodSupply: "Radial recurrent artery",
//            synergists: "Biceps brachii, brachialis",
//            antagonists: "Triceps brachii, anconeus"
//        },
//        injuries: {
//            common: "Strains from overuse in hammer curls or repetitive lifting; can also tighten with poor wrist mobility.",
//            prevention: "Wrist and elbow mobility work, progressive loading in neutral grip, and balanced training.",
//            treatment: "Massage, active release, isometrics, and gentle eccentric loading.",
//            specific: [
//                {
//                    name: "Brachioradialis Strain",
//                    description: "Tearing of muscle fibers from overload or poor control during hammer-grip exercises."
//                }
//            ],
//            recognitionTips: [
//                "Pain along the upper outer forearm",
//                "Discomfort when flexing the elbow with a neutral grip",
//                "Forearm tightness after lifting or carrying"
//            ],
//            rehabEx: [
//                "Hammer curls with light weight",
//                "Isometric elbow holds",
//                "Forearm foam rolling"
//            ],
//            faq: [
//                {
//                    q: "Is the brachioradialis a biceps muscle?",
//                    a: "No — it’s a forearm muscle that assists in elbow flexion, especially in neutral grip positions."
//                },
//                {
//                    q: "Why does my forearm hurt during curls?",
//                    a: "You may be overloading the brachioradialis or using poor form — consider lowering weight and adjusting grip."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Hammer Curl",
//                description: "The most direct exercise for activating the brachioradialis with a neutral grip."
//            },
//            {
//                name: "Reverse Curl",
//                description: "Emphasizes brachioradialis and forearm extensors by using a pronated grip."
//            },
//            {
//                name: "Zottman Curl",
//                description: "Combines supinated and pronated phases to target biceps and brachioradialis together."
//            }
//        ]
//    }
//    ,

//    // CAlVES
//    {
//        name: "Gastrocnemius",
//        displayName: "Gastrocnemius",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Medial and lateral condyles of the femur.",
//            insertion: "Calcaneus via the Achilles tendon.",
//            function: "Plantarflexion of the ankle and assists in knee flexion.",
//            innervation: "Tibial nerve (S1–S2)",
//            bloodSupply: "Posterior tibial and peroneal arteries",
//            synergists: "Soleus, posterior tibialis, peroneals",
//            antagonists: "Tibialis anterior, dorsiflexors"
//        },
//        injuries: {
//            common: "Strains from explosive movements like sprinting and jumping.",
//            prevention: "Eccentric calf raises and proper warm-up before plyometrics.",
//            treatment: "Rest, gentle stretching, massage, and progressive return to loading.",
//            specific: [
//                {
//                    name: "Calf Strain",
//                    description: "Microtears in the gastrocnemius due to sudden stretch or overload."
//                }
//            ],
//            recognitionTips: [
//                "Sudden sharp pain in the calf during movement",
//                "Swelling or bruising in the upper calf",
//                "Difficulty with push-off when walking or running"
//            ],
//            rehabEx: [
//                "Eccentric heel drops",
//                "Wall calf stretches",
//                "Isometric plantarflexion holds"
//            ],
//            faq: [
//                {
//                    q: "Should I stretch before sprinting?",
//                    a: "Dynamic warm-up is key. Static stretching should follow your session, not precede it."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Standing Calf Raise",
//                description: "Targets the gastrocnemius with a stretch and contraction in extended knee position."
//            },
//            {
//                name: "Single-Leg Calf Raise",
//                description: "Unilateral strength and balance builder with deep range focus."
//            }
//        ]
//    }

//    ,
//    {
//        name: "Soleus",
//        displayName: "Soleus",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Posterior tibia and fibula.",
//            insertion: "Calcaneus via the Achilles tendon.",
//            function: "Plantarflexion of the ankle, especially when the knee is bent.",
//            innervation: "Tibial nerve (S1–S2)",
//            bloodSupply: "Posterior tibial and peroneal arteries",
//            synergists: "Gastrocnemius, posterior tibialis, peroneals",
//            antagonists: "Tibialis anterior, dorsiflexors"
//        },
//        injuries: {
//            common: "Tightness or soreness from prolonged standing or underuse.",
//            prevention: "Regular stretching and loaded stretching through full range.",
//            treatment: "Massage, stretching, and strengthening through controlled loading.",
//            specific: [
//                {
//                    name: "Calf Strain",
//                    description: "Microtears in the soleus due to overload, often with bent-knee movements."
//                }
//            ],
//            recognitionTips: [
//                "Tightness or ache deep in the lower calf",
//                "Discomfort when walking upstairs or inclines",
//                "Pain after prolonged standing or slow jogging"
//            ],
//            rehabEx: [
//                "Seated calf raises",
//                "Bent-knee wall stretches",
//                "Isometric calf squeezes"
//            ],
//            faq: [
//                {
//                    q: "Why train the soleus separately?",
//                    a: "It’s most active when the knee is bent — key for endurance and ankle support."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Seated Calf Raise",
//                description: "Emphasizes the soleus muscle by working with flexed knees."
//            },
//            {
//                name: "Single-Leg Seated Calf Raise",
//                description: "Improves unilateral soleus strength and control."
//            }
//        ]
//    }
//    , {
//        name: "Tibialis_anterior",
//        displayName: "Tibialis Anterior",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Lateral condyle and upper two-thirds of the lateral surface of the tibia.",
//            insertion: "Medial cuneiform and base of the first metatarsal.",
//            function: "Dorsiflexion and inversion of the foot.",
//            innervation: "Deep peroneal nerve (L4–S1)",
//            bloodSupply: "Anterior tibial artery",
//            synergists: "Extensor hallucis longus, extensor digitorum longus",
//            antagonists: "Gastrocnemius, soleus, posterior tibialis"
//        },
//        injuries: {
//            common: "Shin splints and anterior compartment syndrome.",
//            prevention: "Progressive loading, proper running technique, and dorsiflexion strength work.",
//            treatment: "Rest, soft tissue work, and gradual return to activity.",
//            specific: [
//                {
//                    name: "Shin Splints (MTSS)",
//                    description: "Pain and inflammation of the tibialis anterior and surrounding tissue due to overuse."
//                }
//            ],
//            recognitionTips: [
//                "Pain along the shin during or after running",
//                "Tenderness on the front or side of the shin",
//                "Worsens with impact activities"
//            ],
//            rehabEx: [
//                "Toe raises",
//                "Banded dorsiflexion",
//                "Slow eccentric lowering of foot"
//            ],
//            faq: [
//                {
//                    q: "How can I prevent shin splints?",
//                    a: "Gradually increase intensity, strengthen dorsiflexors, and ensure good footwear."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Toe Raises",
//                description: "Strengthens the tibialis anterior by lifting the toes while keeping heels on the ground."
//            },
//            {
//                name: "Banded Dorsiflexion",
//                description: "Resistance band exercise for targeted strengthening of the tibialis anterior."
//            }
//        ]
//    }
//,
//    // --- CHEST ---

//    {
//        name: "Chest",
//        displayName: "Chest (Pectoralis major & minor)",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Pectoralis major: Clavicle, sternum, and costal cartilages of ribs 1–6; Pectoralis minor: Anterior surface of ribs 3–5.",
//            insertion: "Pectoralis major: Greater tubercle and intertubercular groove of humerus; Pectoralis minor: Coracoid process of scapula.",
//            function: "Pectoralis major: Shoulder flexion, adduction, and internal rotation; Pectoralis minor: Scapular depression and stabilization.",
//            innervation: "Medial and lateral pectoral nerves (C5–T1)",
//            bloodSupply: "Thoracoacromial artery, internal thoracic artery",
//            synergists: "Anterior deltoid, triceps brachii, serratus anterior",
//            antagonists: "Posterior deltoid, trapezius, rotator cuff"
//        },
//        injuries: {
//            common: "Strain or tear from heavy pressing, poor technique, or imbalance between push/pull training.",
//            prevention: "Proper warm-up, controlled form, and balancing horizontal pull movements.",
//            treatment: "Rest, mobility, and progressive strength return — full tears may require surgery.",
//            specific: [
//                {
//                    name: "Pec Tear",
//                    description: "Partial or complete rupture of pectoralis major tendon — often during bench press."
//                },
//                {
//                    name: "Costochondritis",
//                    description: "Inflammation of the cartilage where ribs attach to the sternum — mimics chest strain."
//                }
//            ],
//            recognitionTips: [
//                "Sharp or tearing pain during pressing",
//                "Bruising or swelling around the chest/shoulder",
//                "Pain when extending the arm or rotating inward"
//            ],
//            rehabEx: [
//                "Wall push-ups",
//                "Band-assisted press movements",
//                "Isometric chest squeezes"
//            ],
//            faq: [
//                {
//                    q: "Can I train chest with shoulder pain?",
//                    a: "Only with strict form and pain-free range — avoid flaring elbows and excessive internal rotation."
//                },
//                {
//                    q: "Is chest stretching important?",
//                    a: "Yes — especially if you sit a lot or do a lot of pressing. It improves shoulder mechanics and posture."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Bench Press",
//                description: "Classic compound lift that develops pressing strength across the chest and arms."
//            },
//            {
//                name: "Push-Up",
//                description: "Bodyweight movement that targets chest through controlled pressing and core engagement."
//            },
//            {
//                name: "Chest Fly",
//                description: "Isolates the chest through horizontal adduction with extended arms — best done light and controlled."
//            }
//        ]
//    }
//,
//    //TORSO/CORE
//    {
//        name: "Diaphragm",
//        displayName: "Diaphragm",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Xiphoid process, lower ribs, lumbar vertebrae",
//            insertion: "Central tendon",
//            function: "Primary muscle for breathing"
//        },
//        injuries: {
//            common: "Spasms, cramping from fatigue",
//            prevention: "Breathing practice",
//            treatment: "Stretching and breathing exercises"
//        },
//        exercises: ["Diaphragmatic breathing"]
//    },
//    {
//        name: "Erector_spinae",
//        displayName: "Erector spinae",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Sacrum, iliac crest, lumbar and thoracic vertebrae (via a shared tendon).",
//            insertion: "Ribs, cervical vertebrae, and skull depending on specific segment (iliocostalis, longissimus, spinalis).",
//            function: "Spinal extension, lateral flexion, and posture stabilization.",
//            innervation: "Posterior branches of spinal nerves",
//            bloodSupply: "Lumbar and intercostal arteries",
//            synergists: "Multifidus, gluteus maximus, hamstrings",
//            antagonists: "Rectus abdominis, obliques"
//        },
//        injuries: {
//            common: "Strain from lifting, prolonged sitting, or excessive spinal extension under load.",
//            prevention: "Posterior chain strength, hip hinge mechanics, and spinal mobility.",
//            treatment: "Rest, tissue decompression, and reintroduction of movement through extension drills.",
//            specific: [
//                {
//                    name: "Erector Spinae Strain",
//                    description: "Tear or overstretching of muscle fibers due to overload or fatigue in lifting tasks."
//                }
//            ],
//            recognitionTips: [
//                "Stiffness or tightness in the lower back",
//                "Pain during back extension or standing up from flexion",
//                "Fatigue after prolonged standing"
//            ],
//            rehabEx: [
//                "Back extensions",
//                "Bird dogs",
//                "Dead bugs (anti-extension)"
//            ],
//            faq: [
//                {
//                    q: "Should I stretch or strengthen erector spinae?",
//                    a: "Both — build strength with hinging movements and use mobility work to reduce chronic tightness."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Back Extension",
//                description: "Strengthens erector spinae through controlled lumbar extension."
//            },
//            {
//                name: "Deadlift",
//                description: "Full-body lift engaging spinal stabilizers throughout the movement."
//            },
//            {
//                name: "Bird Dog",
//                description: "Dynamic stability drill reinforcing anti-rotation and spinal alignment."
//            }
//        ]
//    }
//,
//    {
//        name: "Extensors",
//        displayName: "Wrist and finger extensors",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Lateral epicondyle of humerus",
//            insertion: "Metacarpals and phalanges",
//            function: "Extend wrist and fingers"
//        },
//        injuries: {
//            common: "Tennis elbow (lateral epicondylitis)",
//            prevention: "Forearm balancing",
//            treatment: "Stretching, isometrics, eccentric rehab"
//        },
//        exercises: ["Wrist extensions", "Reverse curls"]
//    },
    
//    {
//        name: "Serratus_anterior",
//        displayName: "Serratus anterior",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Ribs 1–8",
//            insertion: "Medial border of scapula",
//            function: "Protracts and stabilizes scapula"
//        },
//        injuries: {
//            common: "Winged scapula from weakness",
//            prevention: "Scapular push-ups and wall slides",
//            treatment: "Strengthening and neuromuscular work"
//        },
//        exercises: ["Wall slides", "Push-up plus"]
//    },
//    {
//        name: "Serratus_posterior_inferior",
//        displayName: "Serratus posterior inferior",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Spinous processes of T11–L2",
//            insertion: "Lower ribs 9–12",
//            function: "Depresses ribs during exhalation"
//        },
//        injuries: {
//            common: "Strain from heavy breathing or lifting",
//            prevention: "Posture training",
//            treatment: "Stretching and massage"
//        },
//        exercises: ["Deep breathing", "Thoracic mobility"]
//    },
    

//    {
//        name: "Transverse_abdominis",
//        displayName: "Transverse abdominis",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Iliac crest, inguinal ligament, thoracolumbar fascia, and lower 6 ribs.",
//            insertion: "Linea alba, pubic crest.",
//            function: "Core bracing, intra-abdominal pressure, and lumbar spine stabilization.",
//            innervation: "Lower six thoracic nerves and first lumbar nerve",
//            bloodSupply: "Inferior epigastric artery",
//            synergists: "Multifidus, diaphragm, obliques",
//            antagonists: "Spinal extensors (erector spinae)"
//        },
//        injuries: {
//            common: "Weakness leads to poor spinal stability and can contribute to low back pain or herniation.",
//            prevention: "Consistent bracing work, breath training, and core coordination exercises.",
//            treatment: "Targeted deep core activation and postural training.",
//            specific: [],
//            recognitionTips: [
//                "Core instability during compound lifts",
//                "Visible abdominal bulging with poor control",
//                "Lower back pain during heavy training"
//            ],
//            rehabEx: [
//                "Vacuum holds",
//                "Bird dogs",
//                "Dead bugs"
//            ],
//            faq: [
//                {
//                    q: "Is the transverse abdominis visible?",
//                    a: "No — it's a deep stabilizer muscle beneath the visible abs. But it’s critical for functional core strength."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Dead Bug",
//                description: "Teaches controlled limb movement while maintaining a braced core — ideal for TVA activation."
//            },
//            {
//                name: "Vacuum Hold",
//                description: "Builds mind-muscle connection and deep core tension for trunk support."
//            },
//            {
//                name: "Bird Dog",
//                description: "Dynamic anti-rotation and anti-extension exercise activating deep core stabilizers."
//            }
//        ]
//    }
//,
//    {
//        name: "Obliques",
//        displayName: "Obliques (External & Internal)",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "External: Ribs 5–12; Internal: Thoracolumbar fascia, iliac crest, and inguinal ligament.",
//            insertion: "External: Iliac crest, linea alba; Internal: Lower ribs, linea alba, pubis.",
//            function: "Trunk rotation, lateral flexion, and abdominal compression.",
//            innervation: "Lower six thoracic nerves and iliohypogastric nerve",
//            bloodSupply: "Lower posterior intercostal and subcostal arteries",
//            synergists: "Rectus abdominis, transversus abdominis",
//            antagonists: "Erector spinae (for rotation/extension)"
//        },
//        injuries: {
//            common: "Strain from twisting or rotational overload, often seen in sports like tennis or MMA.",
//            prevention: "Progressive rotational training, anti-rotation stability work, and breathing control.",
//            treatment: "Rest, trunk stabilization drills, and reintroduction of rotation under control.",
//            specific: [
//                {
//                    name: "Oblique Strain",
//                    description: "Tearing or overstretching of oblique fibers from excessive rotation or side bending."
//                }
//            ],
//            recognitionTips: [
//                "Pain in the side of the abdomen during rotation or side flexion",
//                "Tenderness along the ribs",
//                "Sharp discomfort with coughing or laughing"
//            ],
//            rehabEx: [
//                "Side planks",
//                "Anti-rotation presses (Pallof)",
//                "Russian twists (light)"
//            ],
//            faq: [
//                {
//                    q: "Is it safe to train obliques after a strain?",
//                    a: "Only after pain is gone — start with static holds like side planks before dynamic twisting."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Russian Twist",
//                description: "Rotational exercise targeting obliques through trunk twisting."
//            },
//            {
//                name: "Side Plank",
//                description: "Isometric hold challenging lateral core stability and oblique endurance."
//            },
//            {
//                name: "Pallof Press",
//                description: "Anti-rotation movement that activates core stabilizers and builds control."
//            }
//        ]
//    }

//    ,
//             // GLUTES 
//    {
//        name: "Gluteus_maximus",
//        displayName: "Gluteus maximus",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Ilium (posterior to posterior gluteal line), sacrum, coccyx, and sacrotuberous ligament.",
//            insertion: "Iliotibial tract and gluteal tuberosity of the femur.",
//            function: "Powerful hip extension, external rotation, and posterior pelvic stabilization.",
//            innervation: "Inferior gluteal nerve (L5–S2)",
//            bloodSupply: "Inferior and superior gluteal arteries",
//            synergists: "Hamstrings, adductor magnus (posterior fibers)",
//            antagonists: "Iliopsoas, rectus femoris"
//        },
//        injuries: {
//            common: "Underactivation (gluteal amnesia), overuse of compensatory muscles, or strain during explosive hip extension.",
//            prevention: "Glute activation drills, posterior chain training, and proper squat/deadlift form.",
//            treatment: "Neuromuscular activation, soft tissue work, and progressive glute-focused strengthening.",
//            specific: [
//                {
//                    name: "Gluteal Inhibition (Glute Amnesia)",
//                    description: "Neuromuscular shutdown due to prolonged sitting, causing compensation by lower back or hamstrings."
//                },
//                {
//                    name: "Glute Max Strain",
//                    description: "Tearing or overstretching during sprinting, lunging, or explosive lifting."
//                }
//            ],
//            recognitionTips: [
//                "Difficulty feeling glutes activate during squats/deadlifts",
//                "Low back or hamstring tightness after hip-dominant movements",
//                "Lack of hip lockout in bridges or hip thrusts"
//            ],
//            rehabEx: [
//                "Glute bridges (bodyweight to banded)",
//                "Single-leg hip thrusts",
//                "Clamshells with band"
//            ],
//            faq: [
//                {
//                    q: "Is the glute max the strongest muscle?",
//                    a: "It's one of the strongest in the body, especially for hip extension and explosive movements."
//                },
//                {
//                    q: "Can you grow glutes without squats?",
//                    a: "Yes — movements like hip thrusts, lunges, and deadlifts target glutes directly and effectively."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Hip Thrust",
//                description: "Targets gluteus maximus in full hip extension — excellent for hypertrophy and strength."
//            },
//            {
//                name: "Romanian Deadlift",
//                description: "Loads the posterior chain through a hip hinge to challenge glutes and hamstrings."
//            },
//            {
//                name: "Bulgarian Split Squat",
//                description: "Unilateral lower body exercise that loads glutes deeply at the bottom position."
//            }
//        ]
//    }
//    ,
//    {
//        name: "Gluteus_minimus",
//        displayName: "Gluteus minimus",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "External surface of the ilium between the anterior and inferior gluteal lines.",
//            insertion: "Anterior surface of the greater trochanter.",
//            function: "Abduction and medial rotation of the hip.",
//            innervation: "Superior gluteal nerve (L4–S1)",
//            bloodSupply: "Superior gluteal artery",
//            synergists: "Gluteus medius, TFL",
//            antagonists: "Adductors"
//        },
//        injuries: {
//            common: "Underactivation contributes to hip instability and poor dynamic balance.",
//            prevention: "Targeted glute work and coordination training.",
//            treatment: "Strengthening and movement pattern correction.",
//            specific: [],
//            recognitionTips: [
//                "Subtle hip instability in dynamic movement",
//                "Knee caving in (valgus) during squats or jumps",
//                "Lack of rotational hip control"
//            ],
//            rehabEx: [
//                "Monster walks",
//                "Band internal rotation steps",
//                "Step-downs"
//            ],
//            faq: [
//                {
//                    q: "Is glute minimus easy to isolate?",
//                    a: "No — but it activates during many controlled abduction and balance-based movements."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Monster Walk",
//                description: "Dynamic banded step-out that activates glute minimus and medius together."
//            },
//            {
//                name: "Step-Down",
//                description: "Controls hip stability during eccentric single-leg lowering."
//            },
//            {
//                name: "Standing Band Abduction",
//                description: "Targets hip abductors while maintaining upright core control."
//            }
//        ]
//    }
//    ,
//    {
//        name: "Gluteus_medius",
//        displayName: "Gluteus medius",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "External surface of the ilium between anterior and posterior gluteal lines.",
//            insertion: "Greater trochanter of the femur.",
//            function: "Abducts the hip and stabilizes the pelvis during gait.",
//            innervation: "Superior gluteal nerve (L4–S1)",
//            bloodSupply: "Superior gluteal artery",
//            synergists: "Gluteus minimus, TFL",
//            antagonists: "Adductor group"
//        },
//        injuries: {
//            common: "Weakness leads to Trendelenburg gait, hip instability, or lateral hip pain.",
//            prevention: "Glute activation drills and lateral strength work.",
//            treatment: "Glute-specific rehab, balance drills, and progressive resistance.",
//            specific: [
//                {
//                    name: "Gluteus Medius Tendinopathy",
//                    description: "Painful inflammation or degeneration of the glute med tendon — often felt on the side of the hip."
//                }
//            ],
//            recognitionTips: [
//                "Pain on the outer hip when walking or climbing stairs",
//                "Instability or dropping of the opposite hip during gait",
//                "Difficulty performing single-leg stance"
//            ],
//            rehabEx: [
//                "Side-lying leg lifts",
//                "Clamshells",
//                "Single-leg bridges"
//            ],
//            faq: [
//                {
//                    q: "Can gluteus medius weakness cause back pain?",
//                    a: "Yes — poor pelvic control can overload the lumbar spine during movement."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Clamshell",
//                description: "Targets the posterior glute med fibers with isolated external rotation."
//            },
//            {
//                name: "Side-Lying Hip Abduction",
//                description: "Directly engages gluteus medius — a staple in rehab and strength routines."
//            },
//            {
//                name: "Banded Lateral Walks",
//                description: "Strengthens hip abductors through resistance band stepping."
//            }
//        ]
//    }
//,

    
//                        // QUADS
//    {
//        name: "Rectus_femoris",
//        displayName: "Rectus femoris",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Anterior inferior iliac spine (AIIS) and superior margin of acetabulum.",
//            insertion: "Patella and tibial tuberosity via the patellar ligament.",
//            function: "Extends the knee and assists in hip flexion.",
//            innervation: "Femoral nerve (L2–L4)",
//            bloodSupply: "Lateral circumflex femoral artery",
//            synergists: "Vastus group, iliopsoas",
//            antagonists: "Hamstrings, gluteus maximus"
//        },
//        injuries: {
//            common: "Strain during sprinting or kicking due to simultaneous hip flexion and knee extension.",
//            prevention: "Proper warm-up, dynamic stretching, and eccentric quad loading.",
//            treatment: "Rest, ice, followed by progressive mobility and strength return.",
//            specific: [
//                {
//                    name: "Rectus Femoris Strain",
//                    description: "Typically occurs in explosive sports like football or sprinting during hip flexion with forceful extension."
//                }
//            ],
//            recognitionTips: [
//                "Pain at front of thigh when lifting knee or kicking",
//                "Swelling or bruising on anterior thigh",
//                "Difficulty walking or squatting"
//            ],
//            rehabEx: [
//                "Straight leg raises",
//                "Wall sits",
//                "Eccentric step-downs"
//            ],
//            faq: [
//                {
//                    q: "Can I stretch the rectus femoris after a strain?",
//                    a: "Yes, but only after acute pain has subsided. Start with gentle mobility and progress carefully."
//                },
//                {
//                    q: "Why is rectus femoris prone to strain?",
//                    a: "It crosses both hip and knee joints, making it vulnerable in explosive, multi-joint movements."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Leg Extension",
//                description: "Isolates the rectus femoris and other quads through knee extension."
//            },
//            {
//                name: "Squats",
//                description: "Compound movement engaging the quads heavily, especially at deeper ranges."
//            },
//            {
//                name: "Step-Ups",
//                description: "Trains unilateral leg strength and quad control through full hip and knee extension."
//            }
//        ]
//    }
//,
//    {
//        name: "Vastus_intermedius",
//        displayName: "Vastus intermedius",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Anterior and lateral surfaces of the femur shaft.",
//            insertion: "Patella and tibial tuberosity via the patellar ligament.",
//            function: "Knee extension.",
//            innervation: "Femoral nerve (L2–L4)",
//            bloodSupply: "Lateral circumflex femoral artery",
//            synergists: "Other quadriceps muscles",
//            antagonists: "Hamstrings"
//        },
//        injuries: {
//            common: "Rarely injured in isolation; may be involved in general quad strains.",
//            prevention: "Gradual loading and full range of motion training.",
//            treatment: "Soft tissue work and general quad rehab protocol.",
//            specific: [],
//            recognitionTips: [
//                "Deep ache in central thigh region",
//                "General quad fatigue after training",
//                "Discomfort during full-range leg extension"
//            ],
//            rehabEx: [
//                "Leg extensions",
//                "Step-ups",
//                "Air squats with pause"
//            ],
//            faq: [
//                {
//                    q: "Is the vastus intermedius visible?",
//                    a: "No — it lies deep under the rectus femoris, but it's essential for knee extension strength."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Squats",
//                description: "Compound movement that activates the entire quadriceps group."
//            },
//            {
//                name: "Step-Ups",
//                description: "Great unilateral quad strength builder with functional transfer."
//            },
//            {
//                name: "Leg Extension",
//                description: "Isolates the intermedius and supports strength in full knee extension."
//            }
//        ]
//    }
//,
//    {
//        name: "Vastus_lateralis",
//        displayName: "Vastus lateralis",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Greater trochanter and lateral linea aspera of femur.",
//            insertion: "Patella and tibial tuberosity via patellar ligament.",
//            function: "Primary extension of the knee.",
//            innervation: "Femoral nerve (L2–L4)",
//            bloodSupply: "Lateral circumflex femoral artery",
//            synergists: "Other quadriceps muscles",
//            antagonists: "Hamstrings"
//        },
//        injuries: {
//            common: "Lateral quad strain or tightness from overuse or poor squat technique.",
//            prevention: "Proper warm-up, balanced strength training, and avoiding valgus collapse.",
//            treatment: "Soft tissue release, stretching, and strength correction.",
//            specific: [
//                {
//                    name: "Lateral Quad Strain",
//                    description: "Overuse injury that causes pain on the outer thigh during squats or running."
//                }
//            ],
//            recognitionTips: [
//                "Tenderness on the outer thigh",
//                "Pain when walking uphill or standing from deep squat",
//                "Visible tightness or imbalance in quad contour"
//            ],
//            rehabEx: [
//                "Foam rolling lateral quad",
//                "Banded terminal knee extensions",
//                "Single-leg leg press"
//            ],
//            faq: [
//                {
//                    q: "Is foam rolling useful for vastus lateralis tightness?",
//                    a: "Yes — it helps release soft tissue tension and improve mobility."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Leg Press",
//                description: "Targets the quads heavily with controlled knee extension."
//            },
//            {
//                name: "Lunges",
//                description: "Great for developing strength and stability through the quads."
//            },
//            {
//                name: "Bulgarian Split Squat",
//                description: "Unilateral quad movement with focus on depth and control."
//            }
//        ]
//    }
//,
//    {
//        name: "Vastus_medialis",
//        displayName: "Vastus medialis",
//        path: "/lowerbody2.glb",
//        anatomy: {
//            origin: "Medial lip of the linea aspera of the femur.",
//            insertion: "Patella and tibial tuberosity via patellar ligament.",
//            function: "Knee extension and medial stabilization of the patella.",
//            innervation: "Femoral nerve (L2–L4)",
//            bloodSupply: "Femoral artery",
//            synergists: "Other quadriceps muscles",
//            antagonists: "Hamstrings"
//        },
//        injuries: {
//            common: "Imbalance or weakness can lead to patellofemoral pain syndrome (PFPS).",
//            prevention: "Strengthen VMO, avoid knee valgus, and improve glute activation.",
//            treatment: "VMO-targeted exercises, taping, and neuromuscular activation drills.",
//            specific: [
//                {
//                    name: "Patellofemoral Pain Syndrome",
//                    description: "Caused by poor tracking of the patella, often linked to VMO underactivation."
//                }
//            ],
//            recognitionTips: [
//                "Knee pain when squatting or descending stairs",
//                "Clicking or instability in kneecap",
//                "Visible imbalance in quad development"
//            ],
//            rehabEx: [
//                "Terminal knee extensions (TKEs)",
//                "Wall sits with ball squeeze",
//                "Step-downs from platform"
//            ],
//            faq: [
//                {
//                    q: "Can I squat with VMO pain?",
//                    a: "Only if pain-free and under control. Prioritize VMO activation drills first."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Leg Extension with Toes Out",
//                description: "Shifts emphasis toward the medial head of the quad (VMO)."
//            },
//            {
//                name: "Step-Downs",
//                description: "Improves quad control while emphasizing eccentric loading."
//            },
//            {
//                name: "Wall Sits",
//                description: "Builds isometric quad endurance and can aid VMO activation."
//            }
//        ]
//    }
//    ,
//                    //SCHOULDERS
//    {
//        name: "Front_delts",
//        displayName: "Anterior Deltoid",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Lateral third of the clavicle.",
//            insertion: "Deltoid tuberosity of the humerus.",
//            function: "Shoulder flexion, internal rotation, and horizontal adduction.",
//            innervation: "Axillary nerve (C5–C6)",
//            bloodSupply: "Posterior circumflex humeral artery",
//            synergists: "Pectoralis major, biceps brachii (short head)",
//            antagonists: "Posterior deltoid, latissimus dorsi"
//        },
//        injuries: {
//            common: "Impingement or tendinitis from excessive front-loading or pressing.",
//            prevention: "Balanced shoulder training, scapular control, and avoiding overuse of front-dominant pressing.",
//            treatment: "Rest, rotator cuff strengthening, posture correction, and mobility drills.",
//            specific: [
//                {
//                    name: "Anterior Shoulder Impingement",
//                    description: "Occurs when the anterior deltoid and supraspinatus are compressed during overhead pressing."
//                },
//                {
//                    name: "Deltoid Tendinitis",
//                    description: "Inflammation due to overuse from pressing-heavy routines or poor shoulder mechanics."
//                }
//            ],
//            recognitionTips: [
//                "Pain during overhead pressing or front raises",
//                "Tightness or soreness in the front shoulder",
//                "Loss of shoulder range of motion",
//                "Clicking or pinching sensation"
//            ],
//            rehabEx: [
//                "Scapular wall slides",
//                "Face pulls",
//                "External rotations with resistance band"
//            ],
//            faq: [
//                {
//                    q: "Can I bench press with anterior deltoid pain?",
//                    a: "Only if pain-free and under control. Avoid excessive internal rotation or deep pressing."
//                },
//                {
//                    q: "Do front delts get enough work from push workouts?",
//                    a: "Yes, usually through compound movements. Isolate only if necessary."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Front Raise",
//                description: "Targets the anterior delts through isolated shoulder flexion with dumbbells or cables."
//            },
//            {
//                name: "Overhead Press",
//                description: "Engages the front delts as the primary mover during shoulder flexion and pressing."
//            },
//            {
//                name: "Arnold Press",
//                description: "Combines rotation and pressing to activate front delts through a broader range of motion."
//            }
//        ]
//    }
//,
//    {
//        name: "Side_delts",
//        displayName: "Lateral Deltoid",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Acromion of the scapula.",
//            insertion: "Deltoid tuberosity of the humerus.",
//            function: "Shoulder abduction (raising arm to the side).",
//            innervation: "Axillary nerve (C5–C6)",
//            bloodSupply: "Thoracoacromial artery",
//            synergists: "Supraspinatus (initiation), trapezius (scapular control)",
//            antagonists: "Latissimus dorsi, pectoralis major"
//        },
//        injuries: {
//            common: "Deltoid strain or rotator cuff imbalance from poor lateral raise form or overload.",
//            prevention: "Controlled lateral raise mechanics, rotator cuff activation, scapular stability work.",
//            treatment: "Rest, corrective movements, external rotation exercises.",
//            specific: [
//                {
//                    name: "Lateral Deltoid Strain",
//                    description: "Common from fast or overloaded lateral raises, causing fiber microtears and soreness."
//                },
//                {
//                    name: "Deltoid Impingement",
//                    description: "Can occur when delts overpower stabilizing muscles and jam into acromion space."
//                }
//            ],
//            recognitionTips: [
//                "Pain or tightness when lifting arm sideways",
//                "Swelling or soreness after shoulder day",
//                "Weakness or poor control during abduction"
//            ],
//            rehabEx: [
//                "Side-lying external rotation",
//                "Light lateral raises with pauses",
//                "Y-raises on incline bench"
//            ],
//            faq: [
//                {
//                    q: "Should I go heavy on lateral raises?",
//                    a: "No — form and control are more important. Go light and focus on tension."
//                },
//                {
//                    q: "Are side delts important for shoulder width?",
//                    a: "Yes — they give the rounded, capped shoulder look."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Lateral Raise",
//                description: "An isolation exercise that targets the lateral deltoid through sideward elevation."
//            },
//            {
//                name: "Upright Row",
//                description: "Engages the delts and traps; use a wide grip for more side delt activation."
//            },
//            {
//                name: "Cable Lateral Raise",
//                description: "Keeps constant tension on the delts through the range of motion."
//            }
//        ]
//    }
//,
//    {
//        name: "Rear_delts",
//        displayName: "Posterior Deltoid",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Spine of the scapula.",
//            insertion: "Deltoid tuberosity of the humerus.",
//            function: "Shoulder extension, external rotation, and horizontal abduction.",
//            innervation: "Axillary nerve (C5–C6)",
//            bloodSupply: "Posterior circumflex humeral artery",
//            synergists: "Infraspinatus, teres minor, rhomboids",
//            antagonists: "Pectoralis major, anterior deltoid"
//        },
//        injuries: {
//            common: "Neglect-related weakness or strain during pulling, especially when overcompensating.",
//            prevention: "Regular rear delt activation, balance push/pull routines, avoid overdominant chest work.",
//            treatment: "Rest, isolated rear delt work, scapular retraction drills.",
//            specific: [
//                {
//                    name: "Posterior Deltoid Weakness",
//                    description: "Common in lifters who neglect pulling work or train chest/front delts excessively."
//                },
//                {
//                    name: "Rear Deltoid Strain",
//                    description: "Can happen with jerky or excessive weight in reverse fly movements."
//                }
//            ],
//            recognitionTips: [
//                "Weakness during rowing or reverse flys",
//                "Rounding of the shoulders or forward posture",
//                "Lack of mind-muscle connection in back exercises"
//            ],
//            rehabEx: [
//                "Face pulls",
//                "Reverse flys with cables or dumbbells",
//                "Band pull-aparts"
//            ],
//            faq: [
//                {
//                    q: "Why are rear delts often underdeveloped?",
//                    a: "They're often overlooked and not trained directly. Push exercises rarely hit them."
//                },
//                {
//                    q: "Do rear delts matter for posture?",
//                    a: "Absolutely — they help pull the shoulder blades back and balance out front-dominant movement."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Face Pull",
//                description: "A pull-apart style movement that emphasizes scapular retraction and rear delt activation."
//            },
//            {
//                name: "Reverse Fly",
//                description: "Isolates the rear delts through horizontal shoulder abduction — best done light and controlled."
//            },
//            {
//                name: "Rear Delt Row",
//                description: "A row variation that targets the upper back with extra rear delt involvement."
//            }
//        ]
//    }
//    ,
//    // LATS
//    {
//        name: "Latissimus_dorsi",
//        displayName: "Latissimus dorsi",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Spinous processes of T7–T12, thoracolumbar fascia, iliac crest, and inferior 3 or 4 ribs.",
//            insertion: "Intertubercular groove of the humerus.",
//            function: "Shoulder extension, adduction, and internal rotation. Assists in trunk rotation and respiration.",
//            innervation: "Thoracodorsal nerve (C6–C8)",
//            bloodSupply: "Thoracodorsal artery",
//            synergists: "Teres major, pectoralis major, triceps (long head)",
//            antagonists: "Deltoids, rotator cuff (esp. in flexion and abduction)"
//        },
//        injuries: {
//            common: "Tendinopathy, overuse from pull-ups/rows, or strain from rapid stretching.",
//            prevention: "Balanced pushing/pulling strength, mobility work, and postural control.",
//            treatment: "Soft tissue release, rest, and gradual loading (rows, isometrics).",
//            specific: [
//                {
//                    name: "Lat Tendinopathy",
//                    description: "Inflammation or degeneration of the lat tendon from repetitive overload or poor shoulder mechanics."
//                }
//            ],
//            recognitionTips: [
//                "Pain under the scapula or posterior armpit region",
//                "Discomfort during pulling movements or overhead motion",
//                "Limited range in shoulder extension"
//            ],
//            rehabEx: [
//                "Wall lat stretch",
//                "Resistance band pull-downs",
//                "Scapular isometric holds"
//            ],
//            faq: [
//                {
//                    q: "Are lats important for posture?",
//                    a: "Yes — they stabilize the spine and scapula, and are vital in pulling mechanics."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Pull-Ups",
//                description: "Bodyweight compound movement that activates the lats through vertical pulling."
//            },
//            {
//                name: "Lat Pulldown",
//                description: "Isolates lat contraction through controlled shoulder adduction and extension."
//            },
//            {
//                name: "Bent-Over Row",
//                description: "Works lats and rhomboids with strong contraction through horizontal pulling."
//            }
//        ]
//    }
//    ,
//    //UPPER BACK
//    {
//        name: "Traps",
//        displayName: "Trapezius",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Occipital bone, ligamentum nuchae, and spinous processes of C7–T12 vertebrae.",
//            insertion: "Lateral third of clavicle, acromion, and spine of scapula.",
//            function: "Upper: elevates scapula; Middle: retracts scapula; Lower: depresses and stabilizes scapula.",
//            innervation: "Accessory nerve (cranial nerve XI) and cervical spinal nerves (C3–C4)",
//            bloodSupply: "Transverse cervical artery",
//            synergists: "Levator scapulae, rhomboids, serratus anterior",
//            antagonists: "Pectoralis minor, latissimus dorsi (in downward rotation)"
//        },
//        injuries: {
//            common: "Overuse tension (especially in upper traps), postural tightness, and imbalance with deep stabilizers.",
//            prevention: "Postural awareness, balanced push-pull training, and lower trap strengthening.",
//            treatment: "Soft tissue release, stretching, and neuromuscular re-education.",
//            specific: [
//                {
//                    name: "Trap Tightness Syndrome",
//                    description: "Chronic tension in the upper traps due to poor posture, stress, or imbalance."
//                },
//                {
//                    name: "Trap Strain",
//                    description: "Overstretching or overload, often from heavy carries or overhead work."
//                }
//            ],
//            recognitionTips: [
//                "Neck or shoulder tension",
//                "Limited scapular movement or retraction",
//                "Uneven shoulders or winging scapula"
//            ],
//            rehabEx: [
//                "Trap 3 raise (lower trap focus)",
//                "Wall slides with band",
//                "Scapular retraction isometrics"
//            ],
//            faq: [
//                {
//                    q: "Should I train traps directly?",
//                    a: "Yes — especially mid/lower traps for posture and scapular health. Upper traps often get enough from compound lifts."
//                },
//                {
//                    q: "Why do my traps stay tight?",
//                    a: "Usually due to stress, poor posture, or overcompensating for weak lower/mid traps."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Face Pulls",
//                description: "Activates the mid and lower traps while improving scapular control."
//            },
//            {
//                name: "Trap 3 Raise",
//                description: "Targets lower traps through scapular upward rotation and depression."
//            },
//            {
//                name: "Shrugs",
//                description: "Primarily hits upper traps and improves strength in scapular elevation."
//            }
//        ]
//    }
//,
//    {
//        name: "Rhomboid_major",
//        description: "Retracts the scapula and stabilizes the shoulder blade.",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Spinous processes of T2–T5 vertebrae",
//            insertion: "Medial border of scapula",
//            function: "Scapular retraction and stabilization"
//        },
//        injuries: {
//            common: "Tightness or knots from poor posture",
//            prevention: "Postural awareness and regular movement",
//            treatment: "Massage, mobility, corrective exercises"
//        },
//        exercises: ["Rows", "Scapular retractions", "Face pulls"]
//    },
//    {
//        name: "Rhomboid_minor",
//        description: "Assists rhomboid major in scapular retraction.",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Spinous processes of C7–T1",
//            insertion: "Medial border of scapula above rhomboid major",
//            function: "Scapular elevation and retraction"
//        },
//        injuries: {
//            common: "Muscle spasms from prolonged sitting",
//            prevention: "Stretching and upper back engagement",
//            treatment: "Heat, soft tissue release"
//        },
//        exercises: ["Band pull-aparts", "Row variations", "T-spine mobility work"]
//    },
//    {
//        name: "Teres_major",
//        displayName: "Teres major",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Inferior angle of scapula",
//            insertion: "Intertubercular groove of humerus",
//            function: "Adducts, extends, and medially rotates arm"
//        },
//        injuries: {
//            common: "Overuse in pulling movements",
//            prevention: "Balanced upper body training",
//            treatment: "Soft tissue release"
//        },
//        exercises: ["Straight-arm pulldown"]
//    },
//    {
//        name: "Teres_minor",
//        displayName: "Teres minor",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Lateral border of the scapula.",
//            insertion: "Inferior facet of the greater tubercle of the humerus.",
//            function: "External rotation and horizontal abduction of the shoulder.",
//            innervation: "Axillary nerve (C5–C6)",
//            bloodSupply: "Circumflex scapular artery",
//            synergists: "Infraspinatus, posterior deltoid",
//            antagonists: "Subscapularis, anterior deltoid"
//        },
//        injuries: {
//            common: "Strain or fatigue from repetitive overhead movements or weak rotator cuff synergy.",
//            prevention: "Balanced shoulder development and regular posterior chain work.",
//            treatment: "Rest, band strengthening, and postural re-education.",
//            specific: [
//                {
//                    name: "Teres Minor Weakness",
//                    description: "Often underdeveloped, leading to imbalances in shoulder rotation."
//                }
//            ],
//            recognitionTips: [
//                "Difficulty stabilizing shoulder in external rotation",
//                "Fatigue during rowing or pull-based exercises",
//                "Limited horizontal abduction strength"
//            ],
//            rehabEx: [
//                "External rotation isometrics",
//                "Dumbbell reverse flys",
//                "Scapular retraction drills"
//            ],
//            faq: [
//                {
//                    q: "Is teres minor part of the rotator cuff?",
//                    a: "Yes — it works with the infraspinatus to externally rotate and stabilize the shoulder."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Band External Rotation",
//                description: "Trains teres minor to stabilize and rotate the shoulder joint."
//            },
//            {
//                name: "Reverse Fly",
//                description: "Strengthens posterior shoulder and improves scapular movement."
//            },
//            {
//                name: "Isometric External Rotation Hold",
//                description: "Builds static strength in the rotator cuff."
//            }
//        ]
//    }
//,
//    // ROTATOR CUFF but its not on the model so lol
//    {
//        name: "Infraspinatus",
//        displayName: "Infraspinatus",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Infraspinous fossa of the scapula.",
//            insertion: "Middle facet of the greater tubercle of the humerus.",
//            function: "External rotation of the shoulder and stabilization of the glenohumeral joint.",
//            innervation: "Suprascapular nerve (C5–C6)",
//            bloodSupply: "Suprascapular and circumflex scapular arteries",
//            synergists: "Teres minor, posterior deltoid",
//            antagonists: "Subscapularis, pectoralis major"
//        },
//        injuries: {
//            common: "Overuse or strain during throwing or pulling movements.",
//            prevention: "External rotation training, posture correction, and scapular control.",
//            treatment: "Rest, eccentric rotator cuff loading, and mobility drills.",
//            specific: [
//                {
//                    name: "Infraspinatus Tendinopathy",
//                    description: "Painful degeneration of the tendon due to chronic overuse."
//                }
//            ],
//            recognitionTips: [
//                "Pain during external rotation",
//                "Shoulder stiffness and weakness when reaching back",
//                "Discomfort with pulling movements"
//            ],
//            rehabEx: [
//                "Side-lying external rotation",
//                "Band pull-aparts",
//                "Cable external rotations"
//            ],
//            faq: [
//                {
//                    q: "Is infraspinatus important for athletes?",
//                    a: "Yes — it plays a critical role in stabilizing and externally rotating the shoulder."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "External Rotation with Band",
//                description: "Strengthens the infraspinatus while minimizing joint stress."
//            },
//            {
//                name: "Face Pulls",
//                description: "Engages the entire posterior shoulder including the infraspinatus."
//            },
//            {
//                name: "Side-lying ER",
//                description: "Classic isolation exercise for the rotator cuff."
//            }
//        ]
//    },
//    {
//        name: "Supraspinatus",
//        displayName: "Supraspinatus",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Supraspinous fossa of the scapula.",
//            insertion: "Superior facet of the greater tubercle of the humerus.",
//            function: "Initiates shoulder abduction (first 15°) and stabilizes the glenohumeral joint.",
//            innervation: "Suprascapular nerve (C5–C6)",
//            bloodSupply: "Suprascapular artery",
//            synergists: "Deltoid (middle fibers)",
//            antagonists: "Latissimus dorsi, pectoralis major (adductors)"
//        },
//        injuries: {
//            common: "Tendinopathy or partial tear from repetitive overhead motion.",
//            prevention: "Rotator cuff strengthening, scapular control, and avoiding impingement-prone exercises.",
//            treatment: "Rest, physiotherapy, and in some cases, surgical repair.",
//            specific: [
//                {
//                    name: "Supraspinatus Tendinopathy",
//                    description: "Degenerative changes or inflammation in the tendon from overuse."
//                },
//                {
//                    name: "Partial Rotator Cuff Tear",
//                    description: "Common in overhead athletes or aging populations — pain in shoulder abduction."
//                }
//            ],
//            recognitionTips: [
//                "Pain or weakness when lifting the arm to the side",
//                "Night pain, especially when lying on the affected side",
//                "Reduced shoulder mobility"
//            ],
//            rehabEx: [
//                "Isometric shoulder abduction",
//                "External rotation band work",
//                "Scapular wall slides"
//            ],
//            faq: [
//                {
//                    q: "Can supraspinatus tears heal without surgery?",
//                    a: "Small tears can often be managed with rehab and strengthening; full tears may require surgery."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Lateral Raise (partial)",
//                description: "Engages the supraspinatus in the first part of abduction."
//            },
//            {
//                name: "Empty Can Raise",
//                description: "Targets the supraspinatus more directly — avoid if painful."
//            },
//            {
//                name: "Isometric Abduction Hold",
//                description: "Builds endurance and stability in the supraspinatus."
//            }
//        ]
//    },
//    {
//        name: "Subscapularis",
//        displayName: "Subscapularis",
//        path: "/upperbody2.glb",
//        anatomy: {
//            origin: "Subscapular fossa of the scapula.",
//            insertion: "Lesser tubercle of the humerus.",
//            function: "Internal rotation of the shoulder and stabilization of the humeral head.",
//            innervation: "Upper and lower subscapular nerves (C5–C7)",
//            bloodSupply: "Subscapular artery",
//            synergists: "Pectoralis major, latissimus dorsi",
//            antagonists: "Infraspinatus, teres minor"
//        },
//        injuries: {
//            common: "Overuse from pressing, swimming, or overhead work; or part of a rotator cuff tear.",
//            prevention: "Balance pushing with pulling, train external rotators, and monitor shoulder positioning.",
//            treatment: "Mobility work, strengthening, and avoiding excessive internal rotation.",
//            specific: [
//                {
//                    name: "Subscapularis Tear",
//                    description: "Part of rotator cuff tear complex, often causes anterior shoulder pain and weakness in internal rotation."
//                }
//            ],
//            recognitionTips: [
//                "Weakness during internal rotation (pressing, hugging)",
//                "Shoulder pain in overhead or reaching movements",
//                "Difficulty maintaining internal stability"
//            ],
//            rehabEx: [
//                "Internal rotation with resistance band",
//                "Wall push-ups plus (serratus + subscap combo)",
//                "Isometric internal rotation holds"
//            ],
//            faq: [
//                {
//                    q: "Is subscapularis injury common?",
//                    a: "It's less common alone, but often involved in multi-tendon rotator cuff tears."
//                }
//            ]
//        },
//        exercises: [
//            {
//                name: "Internal Rotation with Band",
//                description: "Targets the subscapularis by pulling toward the body against resistance."
//            },
//            {
//                name: "Push-Up Plus",
//                description: "Engages stabilizers like serratus and subscap while building pressing strength."
//            },
//            {
//                name: "Isometric Internal Hold",
//                description: "Improves internal rotator endurance and shoulder control."
//            }
//        ]
//    }



];

export default muscles;



