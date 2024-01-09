import React from 'react'

const items = [
    {
        title: 'Inicio',
        path: '/',
    },
    {
        title: 'Consulado',
        path: '/consulado',
        items: [
            {
                title: "Sobre",
                path: "#",
                subitem: [
                    {
                        title: 'O nosso comprimisso',
                        path: '/consulado/comprimisso',
                    },
                    {
                        title: 'Equipa',
                        path: '/consulado/equipa',
                    },
                    {
                        title: 'Horário',
                        path: '/consulado/horario',
                    },
                    {
                        title: 'Comunidade',
                        path: '/consulado/comunicade',
                    },
                ]
            }
            // ... outros subitens de Angola
        ],        
    },
    {
        title: 'Serviços',
        path: '/servicos',
        items: [
            {
                title: 'Registos',
                path: '#',
                subitem: [
                    {
                        title: "Inscrição Consular",
                        path: "/inscricao_consular"
                    },
                    {
                        title: "Nascimento",
                        path: "/servicos/nascimento"
                    },
                    {
                        title: "Perfilhação",
                        path: "/perfilhacao"
                    },
                    {
                        title: "Certificado de Incapacidade matrimonial",
                        path: "/certificado_matrimonial"
                    },
                    {
                        title: "Casamento",
                        path: "/casamento"
                    },
                    {
                        title: "União de Fato",
                        path: "/uniao_de_facto"
                    },
                    {
                        title: "Óbito",
                        path: "/obito"
                    },
                    {
                        title: "Declaração de Confirmação de nacionalidade",
                        path: "/declaracao_nacionalidade"
                    },
                    {
                        title: "Navios",
                        path: "/navios"
                    },
                    {
                        title: "Lei da Nacionalidade",
                        path: "/lei_da_nacionalidade"
                    },
                ],
            },
            {
                title: 'Notariado',
                path: '#',
                subitem: [
                    {
                        title: 'Procurações',
                        path: 'servicos/procuracoes',
                    },
                    // ... outros subitens de Notariado
                ],
            },
            {
                title: 'Identificação',
                path: '/identificacao',
            },
            {
                title: 'Migração',
                path: '/migracao',
            },
        ],

    },
    {
        title: 'Angola',
        path: '#',
        items: [
            {
                title: "Informações",
                path: "#",
                subitem: [
                    {
                        title: 'Sobre',
                        path: '/angola/sobre',
                    },
                    {
                        title: 'Presidente',
                        path: '/angola/presidente',
                    },
                    {
                        title: 'Vice-Presidente',
                        path: '/angola/vice-presidente',
                    },
                    {
                        title: 'Ministro Mirex',
                        path: '/angola/mirex',
                    },
                ]
            }
            // ... outros subitens de Angola
        ],
    },
    {
        title: "Contactos",
        path: '/contactos'
    },
]

export default items