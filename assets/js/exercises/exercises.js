const exerciseData = {
    alongamento: [
        {
            name: "Alongamento de gato e camelo (Cat-Cow Stretch)",
            video: "https://www.youtube.com/embed/YuzoxlVanHw?si=tHFEN9-IdA5cBjPp",
            instructions: [
                "Comece de quatro, com as mãos alinhadas com os ombros e os joelhos com a largura dos quadris.",
                "Ao inspirar, deixe a barriga cair e olhe para cima (posição de vaca).",
                "Ao expirar, arquee as costas para cima, olhando para o umbigo (posição de gato).",
                "Repita o movimento por 30-60 segundos, sincronizando o movimento com a respiração."
            ],
            defaultTime: 60,
            defaultReps: 10
        },
        {
            name: "Alongamento lateral do tronco",
            video: "https://www.youtube.com/embed/uesSifgbdpI?si=CaanAZDSfkKkGnhT",
            instructions: [
                "Fique em pé com os pés na largura dos quadris.",
                "Levante os braços acima da cabeça.",
                "Incline suavemente o corpo para um lado, mantendo os quadris alinhados.",
                "Segure por 15-20 segundos e repita no outro lado.",
                "Mantenha a respiração calma e controlada."
            ],
            defaultTime: 30,
            defaultReps: 5
        },
        {
            name: "Alongamento do pescoço (Neck Stretch)",
            video: "https://www.youtube.com/embed/e325ERSahF8?si=6vho-S1k8ajfSSQV&amp;start=203", 
            instructions: [
                "Sente-se ou fique em pé com a coluna reta.",
                "Incline suavemente a cabeça para um lado, aproximando a orelha do ombro.",
                "Segure por 15-20 segundos e repita no outro lado.",
                "Evite levantar os ombros."
            ],
            defaultTime: 20,
            defaultReps: 3
        },
        {
            name: "Alongamento do isquiotibial (Hamstring Stretch)",
            video: "https://www.youtube.com/embed/mtEddr5CF7c?si=dAc7gDQjOAtEkuBy", 
            instructions: [
                "Sente-se no chão com uma perna estendida e a outra dobrada.",
                "Incline-se para frente em direção à perna estendida, mantendo a coluna reta.",
                "Segure por 15-20 segundos e troque de perna."
            ],
            defaultTime: 30,
            defaultReps: 2
        },
        {
            name: "Alongamento borboleta (Butterfly Stretch)",
            video: "https://www.youtube.com/embed/41PceLOUkKg?si=cWuut9vGHwLnh04j", 
            instructions: [
                "Sente-se com as solas dos pés juntas e os joelhos abertos para os lados.",
                "Segure os tornozelos e pressione suavemente os joelhos para baixo com os cotovelos.",
                "Mantenha por 20-30 segundos."
            ],
            defaultTime: 30,
            defaultReps: 2
        },
        {
            name: "Alongamento de ponte (Bridge Stretch)",
            video: "https://www.youtube.com/embed/ZZZexample", // Atualizar link do vídeo
            instructions: [
                "Deite-se de costas com os pés apoiados no chão e os joelhos dobrados.",
                "Levante os quadris em direção ao teto, mantendo os ombros no chão.",
                "Segure por 15-20 segundos e retorne à posição inicial."
            ],
            defaultTime: 20,
            defaultReps: 5
        },
        {
            name: "Alongamento da cobra (Cobra Stretch)",
            video: "https://www.youtube.com/embed/5rlSICnMTBs?si=UrZE0updetxVxv4T", // Atualizar link do vídeo
            instructions: [
                "Deite-se de barriga para baixo com as palmas das mãos próximas ao peito.",
                "Pressione as mãos contra o chão e levante o peito, mantendo os quadris no chão.",
                "Segure por 20-30 segundos."
            ],
            defaultTime: 30,
            defaultReps: 3
        },
        {
            name: "Alongamento para ombros (Shoulder Stretch)",
            video: "https://www.youtube.com/embed/-EvsDX_8afI?si=oy_RNx6Bn1g8ho-2&amp;start=144", // Atualizar link do vídeo
            instructions: [
                "Cruze um braço sobre o peito e segure com a mão oposta.",
                "Pressione suavemente o braço para o peito.",
                "Segure por 15-20 segundos e troque de lado."
            ],
            defaultTime: 30,
            defaultReps: 3
        }
    ],
        yoga: [
            {
                name: "Saudação ao Sol (Sun Salutation)",
                video: "https://www.youtube.com/embed/0sNFZM_I6v0?si=qDM-6jotbn2UWveR",
                instructions: [
                    "Realize uma sequência de posturas que incluem alongamento, flexão e respiração sincronizada.",
                    "Repita por 2-3 minutos."
                ],
                defaultTime: 180,
                defaultReps: 5
            },
            {
                name: "Postura da Criança (Child’s Pose)",
                video: "https://www.youtube.com/embed/9ew1pOUIcr8?si=BlZZTFCL4Y-KojTM",
                instructions: [
                    "Ajoelhe-se no chão, sente-se sobre os calcanhares e estique os braços à frente.",
                    "Relaxe a testa no chão e respire profundamente.",
                    "Segure por 30-60 segundos."
                ],
                defaultTime: 60,
                defaultReps: 1
            },
            {
                name: "Postura do Cachorro olhando para baixo (Downward Dog)",
                video: "https://www.youtube.com/embed/FarCh5zqDGU?si=UHQj9jZUymtRkLpA",
                instructions: [
                    "Comece na posição de quatro apoios.",
                    "Levante os quadris em direção ao teto, formando um 'V' invertido.",
                    "Mantenha os calcanhares no chão e os braços esticados.",
                    "Segure por 20-30 segundos."
                ],
                defaultTime: 30,
                defaultReps: 1
            },
            {
                name: "Postura da Montanha (Mountain Pose)",
                video: "https://www.youtube.com/embed/0d4uBSHtX0U?si=5YORK2X8A3JJWfZO",
                instructions: [
                    "Fique em pé com os pés juntos, braços ao lado do corpo.",
                    "Ative os músculos das pernas e mantenha a coluna reta.",
                    "Levante os braços acima da cabeça e olhe para frente.",
                    "Segure por 30-60 segundos."
                ],
                defaultTime: 60,
                defaultReps: 1
            },
            {
                name: "Postura do Guerreiro (Warrior Pose)",
                video: "https://www.youtube.com/embed/msNM_htX0rA?si=008D3s93B7Iq8oyl",
                instructions: [
                    "Dê um grande passo para trás com uma perna.",
                    "Dobre o joelho da perna da frente enquanto mantém a perna traseira reta.",
                    "Levante os braços acima da cabeça ou abra-os em forma de T.",
                    "Segure por 20-30 segundos e troque de lado."
                ],
                defaultTime: 30,
                defaultReps: 2
            },
            {
                name: "Postura do Triângulo (Triangle Pose)",
                video: "https://www.youtube.com/embed/OtB6mGYk1QI?si=keVYxcRkcnBwhtWi&amp;start=5",
                instructions: [
                    "Fique em pé com os pés afastados e vire um pé para fora.",
                    "Incline-se para o lado e toque o pé ou o tornozelo com a mão.",
                    "Levante a outra mão em direção ao teto.",
                    "Segure por 20-30 segundos e troque de lado."
                ],
                defaultTime: 30,
                defaultReps: 2
            },
            {
                name: "Postura da Árvore (Tree Pose)",
                video: "https://www.youtube.com/embed/k8vSCIllBWY?si=Bk_nlZmTkAH7CVbY&amp;start=7",
                instructions: [
                    "Fique em pé e apoie o pé direito na parte interna da coxa esquerda.",
                    "Junte as palmas das mãos em frente ao peito ou levante-as acima da cabeça.",
                    "Segure por 20-30 segundos e troque de lado."
                ],
                defaultTime: 30,
                defaultReps: 2
            },
            {
                name: "Postura do Cadáver (Savasana)",
                video: "https://www.youtube.com/embed/WzKoT8bmP_E?si=eaWXKGnWvvtMT9Cv&amp;start=7",
                instructions: [
                    "Deite-se de costas com os braços relaxados ao lado do corpo.",
                    "Feche os olhos e respire profundamente.",
                    "Permaneça na posição por 2-5 minutos."
                ],
                defaultTime: 300,
                defaultReps: 1
            }
        ],
        exerciciosComuns: [
            {
                name: "Flexões (Push-Ups)",
                video: "https://www.youtube.com/embed/6URcQFbGZTA?si=hBVqYXKPKg45jhk-&amp;start=55",
                instructions: [
                    "Deite-se de barriga para baixo e coloque as mãos um pouco mais largas que os ombros.",
                    "Empurre o corpo para cima até que os braços estejam retos e abaixe-se novamente.",
                    "Repita por 10-20 repetições."
                ],
                defaultTime: 0,
                defaultReps: 15
            },
            {
                name: "Agachamentos (Squats)",
                video: "https://www.youtube.com/embed/xqvCmoLULNY?si=fZinBtGkUeBUC0ON",
                instructions: [
                    "Fique em pé com os pés na largura dos ombros.",
                    "Abaixe-se como se fosse sentar em uma cadeira, mantendo as costas retas.",
                    "Retorne à posição inicial e repita."
                ],
                defaultTime: 0,
                defaultReps: 15
            },
            {
                name: "Abdominais (Crunches)",
                video: "https://www.youtube.com/embed/0t4t3IpiEao?si=Am98JBIIz0BFOFae",
                instructions: [
                    "Deite-se de costas com os joelhos dobrados e os pés apoiados no chão.",
                    "Coloque as mãos atrás da cabeça e levante o tronco em direção aos joelhos.",
                    "Retorne à posição inicial e repita."
                ],
                defaultTime: 0,
                defaultReps: 20
            },
            {
                name: "Prancha (Plank)",
                video: "https://www.youtube.com/embed/pvIjsG5Svck?si=MqXzwpBuXnMmIuPH&amp;start=12",
                instructions: [
                    "Deite-se de bruços e levante o corpo apoiando-se nos antebraços e nos dedos dos pés.",
                    "Mantenha o corpo reto e contraia o abdômen.",
                    "Segure a posição por 20-60 segundos."
                ],
                defaultTime: 60,
                defaultReps: 1
            },
            {
                name: "Burpees",
                video: "https://www.youtube.com/embed/xQdyIrSSFnE?si=YU5hla0NcbqEuPWd&amp;start=9",
                instructions: [
                    "Fique em pé e desça para uma posição de agachamento com as mãos no chão.",
                    "Pule para trás em uma posição de prancha, depois volte à posição de agachamento.",
                    "Finalize com um salto explosivo para cima.",
                    "Repita 8-15 vezes."
                ],
                defaultTime: 0,
                defaultReps: 12
            },
            {
                name: "Elevação de pernas (Leg Raises)",
                video: "https://www.youtube.com/embed/-1k2b8dG16g?si=eSw_TwVdwVUi9E90",
                instructions: [
                    "Deite-se de costas com as pernas retas.",
                    "Levante ambas as pernas até formar um ângulo de 90 graus e depois abaixe devagar.",
                    "Mantenha o abdômen contraído durante o movimento."
                ],
                defaultTime: 0,
                defaultReps: 12
            },
            {
                name: "Corrida estacionária (Running in Place)",
                video: "https://www.youtube.com/embed/eBQAa9dEalY?si=VPjm3W-gDW2NHVPc",
                instructions: [
                    "Corra no lugar levantando os joelhos até a altura da cintura.",
                    "Movimente os braços em sincronia com as pernas.",
                    "Realize o movimento por 30-60 segundos."
                ],
                defaultTime: 60,
                defaultReps: 1
            },
            {
                name: "Saltos com polichinelo (Jumping Jacks)",
                video: "https://www.youtube.com/embed/iSSAk4XCsRA?si=UVpSQb4s0Zi4Tuar&amp;start=7",
                instructions: [
                    "Comece com os pés juntos e as mãos ao lado do corpo.",
                    "Salte abrindo as pernas e levantando os braços acima da cabeça.",
                    "Volte à posição inicial e repita o movimento."
                ],
                defaultTime: 0,
                defaultReps: 20
            }
        ]
};
