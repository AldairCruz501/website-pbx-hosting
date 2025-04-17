import type { Servicio } from "../interfaces/Header";

export const servicios: Servicio[] = [
	{
		nombre: "Telefonía IP",
		route: "/",
		servicios: [
			{
				nombre: "Telefonía IP",
				route: "/"
			},
			{
				nombre: "Línea Sip",
				route: "/"
			},
			{
				nombre: "Líneas Telefónicas",
				route: "/"
			},
			{
				nombre: "Paquetes VoIP",
				route: "/"
			},
			{
				nombre: "Paquetes PyME",
				route: "/"
			},
		],
	},
	{
		nombre: "Conmutador en la nube",
		route: "",
		servicios: [],
	},
	{
		nombre: "Hosting",
		route: "",
		servicios: [
			{
				nombre: "Planes Hosting",
				route: "/"
			},
			{
				nombre: "Diseño Web",
				route: "/"
			},
		],
	},
	{
		nombre: "Dominio",
		route: "/",
		servicios: [
			{
				nombre: "Comprar Dominio",
				route: "/"
			},
			{
				nombre: "Transferir Dominio",
				route: "/"
			},
		],
	},
	{
		nombre: "Servidores",
		route: "/",
		servicios: [
			{
				nombre: "VPS",
				route: "/"
			},
			{
				nombre: "VPN",
				route: "/"
			},
			{
				nombre: "Dedicados",
				route: "/"
			},
		],
	},
	{
		nombre: "SMS Marketing",
		route: "",
		servicios: [],
	},
	{
		nombre: "Callcenter",
		route: "/",
		servicios: [
			{
				nombre: "PBX Dialer",
				route: "/"
			},
			{
				nombre: "Paquetes Callcenter",
				route: "/"
			},
			{
				nombre: "Software Kollob",
				route: "/"
			},
		],
	},
]