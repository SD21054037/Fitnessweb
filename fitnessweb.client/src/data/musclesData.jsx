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
    }
];

export default muscles;



