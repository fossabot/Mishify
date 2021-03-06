import { Language, LanguageStore, LanguageOptions, util } from 'klasa';
export default class extends Language {

	public language: any

	constructor(store: LanguageStore, file: string[], directory: string, options?: LanguageOptions) {
		super(store, file, directory, options);
		this.language = {
			/* eslint-disable */
			DEFAULT: (key: any) => ` 🆗 La clave '${key}' aún no ha sido traducido para 'es-ES'.`,
			DEFAULT_LANGUAGE: 'Idioma predeterminado',
			PREFIX_REMINDER: (prefix: any[]) => `🤖 El prefijo del bot en este servidor es: ${Array.isArray(prefix) ? prefix.map(pre => `\`${pre}\``).join(', ') : `\`${prefix}\``}`,
			SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data: any, key: any) => ` ❌ El valor '${data}' para la clave '${key}' no existe.`,
			SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data: any, key: any) => ` 🆗 El valor '${data}' para la clave '${key}' ya existe.`,
			SETTING_GATEWAY_SPECIFY_VALUE: ' ❌ Debes especificar el valor para añadir o filtrar.',
			SETTING_GATEWAY_KEY_NOT_ARRAY: (key: any) => ` ❌ La clave '${key}' no es un Array.`,
			SETTING_GATEWAY_KEY_NOEXT: (key: any) => ` ❌ La clave '${key}' no existe en el esquema de datos.`,
			SETTING_GATEWAY_INVALID_TYPE: ' ❌ El parámetro \'type\' debe ser o \'add\' o \'remove\'.',
			RESOLVER_INVALID_CUSTOM: (name: any, type: any) => ` ❌ ${name} debe ser un nombre válido de ${type}`,
			RESOLVER_INVALID_PIECE: (name: any, piece: any) => ` ❌ ${name} debe ser un nombre válido de ${piece}.`,
			RESOLVER_INVALID_MESSAGE: (name: any) => ` ❌ ${name} debe ser una ID de mensaje válida.`,
			RESOLVER_INVALID_USER: (name: any) => ` ❌ ${name} debe ser una mención o una ID de usuario válida.`,
			RESOLVER_INVALID_MEMBER: (name: any) => ` ❌ ${name} debe ser una mención o una ID de usuario válida.`,
			RESOLVER_INVALID_CHANNEL: (name: any) => ` ❌ ${name} debe ser una mención o una ID de canal válida.`,
			RESOLVER_INVALID_EMOJI: (name: any) => ` ❌ ${name} debe ser un emoji válido.`,
			RESOLVER_INVALID_GUILD: (name: any) => ` ❌ ${name} debe ser una ID válida de servidor.`,
			RESOLVER_INVALID_ROLE: (name: any) => ` ❌ ${name} debe ser una mención o una ID de rol válida.`,
			RESOLVER_INVALID_LITERAL: (name: any) => ` ❌ Su opción no coincide con la siguiente posibilidad: ${name}`,
			RESOLVER_INVALID_BOOL: (name: any) => ` ❌ ${name} debe ser 'true' o 'false'.`,
			RESOLVER_INVALID_INT: (name: any) => ` ❌ ${name} debe ser un número entero, sin decimales.`,
			RESOLVER_INVALID_FLOAT: (name: any) => ` ❌ ${name} debe ser un número.`,
			RESOLVER_INVALID_REGEX_MATCH: (name: any, pattern: any) => ` ❌ ${name} debe seguir el patrón de la expresión regular \`${pattern}\``,
			RESOLVER_INVALID_URL: (name: any) => ` ❌ ${name} debe ser un enlace URL válido.`,
			RESOLVER_INVALID_DATE: (name: any) => ` ❌ ${name} debe ser una fecha válida.`,
			RESOLVER_INVALID_DURATION: (name: any) => ` ❌ ${name} debe ser una duración válida.`,
			RESOLVER_INVALID_TIME: (name: any) => ` ❌ ${name} debe ser una fecha o duración válida.`,
			RESOLVER_INVALID_COLOR: (name: any) => ` ❌ ${name} debe ser un color valido`,
			RESOLVER_STRING_SUFFIX: ' caracteres',
			RESOLVER_MINMAX_EXACTLY: (name: any, min: any, suffix: any) => ` ❌ ${name} debe ser exactamente ${min}${suffix}.`,
			RESOLVER_MINMAX_BOTH: (name: any, min: any, max: any, suffix: any) => ` ❌ ${name} debe estar entre ${min} y ${max}${suffix}.`,
			RESOLVER_MINMAX_MIN: (name: any, min: any, suffix: any) => ` ❌ ${name} debe ser mayor que ${min}${suffix}.`,
			RESOLVER_MINMAX_MAX: (name: any, max: any, suffix: any) => ` ❌ ${name} debe ser menor que ${max}${suffix}.`,
			REACTIONHANDLER_PROMPT: ' ❓❔ ¿A qué página te gustaría saltar?',
			COMMANDMESSAGE_MISSING: ' ⚠ Faltan uno o más argumentos al final de la entrada.',
			COMMANDMESSAGE_MISSING_REQUIRED: (name: any) => ` ❌ ${name} es un argumento requerido.`,
			COMMANDMESSAGE_MISSING_OPTIONALS: (possibles: any) => ` ❌ Falta una opción requerida: (${possibles})`,
			COMMANDMESSAGE_NOMATCH: (possibles: any) => ` ❌ Su opción no coincide con ninguna de las posibilidades: (${possibles})`,
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag: any, error: any, time: any) => ` ⚠ ${tag} | **${error}** | Usted tiene **${time}** segundos para responder este mensage emergente con un argumento válido. Escribe **"ABORT"** para abortar el mensaje emergente.`, // eslint-disable-line max-len
			MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag: any, name: any, time: any) => ` ⚠ ${tag} | **${name}** es un argumento repetible | Usted tiene **${time}** segundos para responder este mensage emergente con un argumento válido. Escribe **"CANCEL"** para abortar el mensaje emergente.`, // eslint-disable-line max-len
			MONITOR_COMMAND_HANDLER_ABORTED: ' ✅ Abortado.',
			INHIBITOR_COOLDOWN: (remaining: any) => ` ✅ Acabas de usar este comando. Puedes usarlo de nuevo en ${remaining} segundos.`,
			INHIBITOR_DISABLED: ' ✅ Este comando está desactivado.',
			INHIBITOR_MISSING_BOT_PERMS: (missing: any) => ` ❌ Permisos insuficientes, necesito: **${missing}**`,
			INHIBITOR_NSFW: ' ❌ Dirígete a un canal NSFW para usar ese comando.',
			INHIBITOR_PERMISSIONS: ' ❌ No tienes los permisos necesarios para usar este comando.',
			INHIBITOR_REQUIRED_CONFIGS: (settings: any[]) => ` ❌ El servidor no tiene las siguientes clave${settings.length > 1 ? 's' : ''}: **${settings.join(', ')}** y no puede ser ejecutado.`,
			INHIBITOR_RUNIN: (types: any) => ` ❌ Este comando sólo está disponible en los canales de tipo: ${types}.`,
			INHIBITOR_RUNIN_NONE: (name: any) => ` ❌ El comando ${name} no está configurado para ser ejecutado en cualquier canal.`,
			COMMAND_BLACKLIST_DESCRIPTION: ' 🏴 Añade o retira usuarios y servidores de la lista negra.',
			COMMAND_BLACKLIST_SUCCESS: (usersAdded: any[], usersRemoved: any[], guildsAdded: any[], guildsRemoved: any[]) => [
				usersAdded.length ? ` 🙍‍♂️🙍‍♀️➕ **Usuarios añadidos**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
				usersRemoved.length ? ` 🙍‍♂️🙍‍♀️➖ **Usuarios eliminados**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
				guildsAdded.length ? ` 💻➕ **Servidores añadidos**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
				guildsRemoved.length ? ` 💻➖ **Servidores eliminados**\n${util.codeBlock('', guildsRemoved.join(', '))}` : ''
			].filter(val => val !== '').join('\n'),
			COMMAND_EVAL_DESCRIPTION: ' ☕ Evalúa Javascript arbitrario (uso exclusivo para administradores).',
			COMMAND_EVAL_EXTENDEDHELP: [
				'El comando eval ejecuta el código tal y como está escrito, cualquier error será capturado.',
				'También usa la herramienta "flags". Escribe --silent, --depth=number o --async para personalizar la salida.',
				'El flag --silent silencia la salida.',
				'El flag --depth acepta un número, por ejemplo, --depth=2, para personalizar la profundidad de util.inspect.',
				'El flag --async rodea el código en un AsyncFunction en el cual puedes usar await, sin embargo, si necesitas saber el valor de algo, necesitarás la palabra clave return.',
				'El flag --showHidden activará la opción showHidden de util.inspect.',
				'Si la salida es demasiado largo, la salida será enviado como archivo, o en la consola si el bot no tiene el permiso ATTACH_FILES.'
			].join('\n'),
			COMMAND_EVAL_ERROR: (time: any, output: any, type: any) => ` ❌ **Error**:${output}\n**Tipo**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT: (time: any, output: any, type: any) => ` ❌ **Salida**:${output}\n**Tipo**:${type}\n${time}`,
			COMMAND_EVAL_SENDFILE: (time: any, type: any) => ` ⚠ La salida era demasiado largo... enviado como archivo.\n**Tipo**:${type}\n${time}`,
			COMMAND_EVAL_SENDCONSOLE: (time: any, type: any) => ` ⚠ La salida era demasiado larga... enviado el resultado a la consola.\n**Tipo**:${type}\n${time}`,
			COMMAD_UNLOAD: (type: any, name: any) => ` ✅ Descargado la pieza tipo ${type}: ${name}`,
			COMMAND_UNLOAD_DESCRIPTION: ' ✅ Descarga una pieza de Klasa.',
			COMMAND_UNLOAD: (type: any, name: any) => ` ✅ Descargado la pieza tipo ${type}: ${name}`,
			COMMAND_TRANSFER_ERROR: ' ❌ El archivo ha sido transferido o no existe.',
			COMMAND_TRANSFER_SUCCESS: (type: any, name: any) => ` ✅ Transferido la pieza tipo ${type}: ${name} con éxito.`,
			COMMAND_TRANSFER_FAILED: (type: any, name: any) => ` ❌ La transferencia de la pieza tipo ${type}: ${name} al Cliente ha fallado. Por favor, revisa su consola.`,
			COMMAND_RELOAD: (type: any, name: any) => `✅ Recargado la pieza tipo ${type}: ${name}`,
			COMMAND_RELOAD_ALL: (type: any) => `✅ Recargado todas las piezas tipo ${type}.`,
			COMMAND_RELOAD_DESCRIPTION: ' 🔄 Recarga una pieza de Klasa, o todas las piezas de un una colección.',
			COMMAND_REBOOT: ' 🔄 Reiniciando... 🔄 ',
			COMMAND_REBOOT_DESCRIPTION: ' 🔄 Reinicia el bot.',
			COMMAND_PING: '¿Ping?',
			COMMAND_PING_DESCRIPTION: ' 🏓 Ejecuta una prueba de conexión a Discord.',
			COMMAND_PINGPONG: (diff: any, ping: any) => `¡Pong! (El viaje duró: ${diff}ms. Latido: ${ping}ms.)`,
			COMMAND_INVITE_SELFBOT: '¿Por qué necesitarías un enlace de invitación para un selfbot?',
			COMMAND_INVITE: (client: { user: { username: any; }; invite: any; }) => [
				`Para añadir ${client.user.username} a tu servidor de Discord:`,
				`<${client.invite}>`,
				util.codeBlock('', [
					'El enlace de arriba está generado con los permisos necesarios para ejecutar todos los comandos actuales.',
					'Entiendo que no todos los permisos son necesarios para todos los servidores, pero no se preocupe de remover alguno de los permisos.',
					'Si intentas usar un comando que require más permisos de los que el bot tiene, te lo haré saber.'
				].join(' ')),
				'Por favor reporta los problemas en <https://github.com/dirigeants/klasa> si encuentras algún bug.'
			],
			COMMAND_INVITE_DESCRIPTION: 'Muestra el enlace de invitación para el bot.',
			COMMAND_INFO: [
				'Klasa es un framework \'plug-and-play\' construido encima de la librería Discord.js.',
				'La mayor parte del código es modularizado, lo cual permite a los desarrolladores editar Klasa para encajar con sus necesidades.',
				'',
				'Algunas de las características de Klasa incluye:',
				'• 🐇💨 Carga muy rápida con soporte ES2017 (`async`/`await`).',
				'• 🎚🎛 Configuración separada para cada servidor, usuario, e cliente; que puede ser expandido con tu código.',
				'• 💬 Un sistema de comandos personalizable con análisis automático de argumentos y fácil de usar, refrescar, y descargar módulos.',
				'• 👀 "Monitores", los cuales pueden interactuar con todos los mensajes, como un evento de mensaje normal (Filtro de palabras, protección de spam, etc).',
				'• ⛔ "Inhibidores", los cuales pueden prevenir la ejecución de los comandos basado en un set de parámetros (Permisos, Listas negras, etc).',
				'• 🗄 "Proveedores", los cuales te permiten conectar Klasa con una base de datos cualquiera.',
				'• ✅ "Finalizadores", los cuales son ejecutados después de un comando lanzado con éxito.',
				'• ➕ "Extensibles", código que actua pasivamente. Añaden propiedades o métodos a las clases de Discord.js.',
				'• 🌐 "Lenguages", los cuales permiten usar diferentes lenguages en tu bot.',
				'• ⏲ "Tareas", pueden ser programados para ejecutar código en el futuro, opcionalmente repetibles.',
				'',
				'Esperamos servir un framework 100% personalizable para todas las audiencias. Nosotros hacemos actualizaciones frecuentes.',
				'Si estás interesado en nosotros, revísanos en <https://klasa.js.org>'
			],
			COMMAND_INFO_DESCRIPTION: 'Provee información sobre el bot.',
			COMMAND_HELP_DESCRIPTION: 'Muestra el mensaje de ayuda para los comandos.',
			COMMAND_HELP_NO_EXTENDED: ' ❌ Descripción detallada no disponible.',
			COMMAND_HELP_DM: '✅💬 La lista de comandos ha sido enviado a tus mensajes privados.',
			COMMAND_HELP_NODM: '❌💬 Parece que tienes tus mensajes privados desactivados, no pude enviarte la lista de comandos. Actívalos para recibirlos',
			COMMAND_HELP_USAGE: (usage: any) => `Uso :: ${usage}`,
			COMMAND_HELP_EXTENDED: 'Información Detallada ::',
			COMMAND_ENABLE: (type: any, name: any) => `+ Activado con éxito la pieza tipo ${type}: ${name}`,
			COMMAND_ENABLE_DESCRIPTION: 'Re-activa temporalmente alguna pieza. Su estado original será restaurado al reiniciar.',
			COMMAND_DISABLE: (type: any, name: any) => `+ Desactivado con éxito la pieza ${type}: ${name}`,
			COMMAND_DISABLE_DESCRIPTION: 'Re-desactiva temporalmente alguna pieza. Su estado original será restaurado al reiniciar.',
			COMMAND_DISABLE_WARN: 'Probablemente no quieras desactivar eso, ya que no podrías ejecutar un comando para reactivarlo.',
			COMMAND_CONF_NOKEY: ' ⚠ Debes escribir una clave',
			COMMAND_CONF_NOVALUE: ' ⚠ Debes escribir un valor',
			COMMAND_CONF_GUARDED: (name: string) => ` ⚠ La clave ${util.toTitleCase(name)} no debería ser desactivado.`,
			COMMAND_CONF_UPDATED: (key: any, response: any) => ` ✅ Actualizado con éxito la clave **${key}**: \`${response}\``,
			COMMAND_CONF_KEY_NOT_ARRAY: ' ⚠ Esta clave no almacena múltiples valores. Usa la acción \'reset\'.',
			COMMAND_CONF_GET_NOEXT: (key: any) => ` ❌ La clave **${key}** no parece existir.`,
			COMMAND_CONF_GET: (key: any, value: any) => ` ⚠ El valor para la clave **${key}** es: \`${value}\``,
			COMMAND_CONF_RESET: (key: any, response: any) => ` ⚠ El valor para la clave **${key}** ha sido restaurada a: \`${response}\``,
			COMMAND_CONF_SERVER_DESCRIPTION: 'Define la configuración por servidor.',
			COMMAND_CONF_SERVER: (key: any, list: any) => `**Configuración del servidor${key}**\n${list}`,
			COMMAND_CONF_USER_DESCRIPTION: 'Define la configuración por usuario.',
			COMMAND_CONF_USER: (key: any, list: any) => `**Configuración del usuario${key}**\n${list}`,
			COMMAND_STATS: (memUsage: any, uptime: any, users: any, servers: any, channels: any, klasaVersion: any, discordVersion: any, processVersion: any, message: { guild: { shardID: any; }; client: { options: { totalShardCount: any; }; }; }) => [
				'= STATISTICS =',
				'',
				`• Uso Memoria  :: ${memUsage} MB`,
				`• T. Actividad :: ${uptime}`,
				`• Usuarios     :: ${users}`,
				`• Servidores   :: ${servers}`,
				`• Canales      :: ${channels}`,
				`• Klasa        :: v${klasaVersion}`,
				`• Discord.js   :: v${discordVersion}`,
				`• Node.js      :: ${processVersion}`,
				`• Shard        :: ${(message.guild ? message.guild.shardID : 0) + 1} / ${message.client.options.totalShardCount}`
			],
			COMMAND_STATS_DESCRIPTION: 'Provee algunos detalles sobre el bot y sus estadísticas.',
			MESSAGE_PROMPT_TIMEOUT: ' ❌ El tiempo ha expirado.',
			
			// de aqui para abajo escribo mi lang es-ES
			BOT_ROLE_ADD_SUCCESS: (rol: string) => ` ✅ Se añadio \`${rol}\` correctamente.`,
			INVALID_ROLE: ' ⚠ Por favor específica un rol valido.',
			BOT_ROLE_IS_ALREADY_ADDED: (rol: string) => ` ❌ El rol \`${rol}\` ya existe.`,
			BOT_ROLE_REMOVE_SUCCESS: (rol: string) => `El rol \`${rol}\` se añadió correctamente.`,
			BOT_ROLE_NOT_ADDED: (rol: string) => ` ❌ El rol \`${rol}\` no ha sido añadido.`,
			COMANDO_WELCOMEIMAGE_ACTIVADO: ' ✅ **| Imagen de biendenida activada.**',
			COMANDO_WELCOMEIMAGE_DESACTIVADO: ' ✅ **| Imagen de bienvenida desactivada.**',
			COMANDO_WELCOMEIMAGE_USO: (prefix: string) => [
				`**${prefix}welcome_image on`,
				`${prefix}welcome_image off`,
				`${prefix}welcome_image channel [channelid|channelname|#channelmention]`,
				`${prefix}welcome_image message [texto]`,
				`${prefix}welcome_image background [imageurl|remove]`,
				`${prefix}welcome_image color [circle|welcome|message|username] [#hexadecimal|random|default]**`
			],
			COMANDO_WELCOMEIMAGE_SUB_COLOR_SIN_PROPIEDAD: '⚠ **| Use una de las siguientes opciones \`circle, welcome, message o username\`**',
			COMANDO_WELCOMEIMAGE_SUB_COLOR_SIN_COLOR: '⚠ **| El color es requerido en hexadecimal (#ffffff o #0a2f31), use \`random\` para un color aleatorio o \`default\` para el color por defecto (blanco).**',
			COMANDO_WELCOMEIMAGE_SUB_COLOR_ACTUALIZADO: '✅ **| El color ha sido actualizado correctamente.**',
			COMANDO_WELCOMEIMAGE_SUB_BACKGROUND_ACTUALIZADO: '✅ ** | La imagen se actualizo correctamente.**',
			COMANDO_WELCOMEIMAGE_SUB_BACKGROUND_NO_URL: '⚠ **| URL inválida.**',
			COMANDO_WELCOMEIMAGE_SUB_MSG_ACTUALIZADO: '✅ **| El mensaje ha sido actualizado correctamente.**',
			COMANDO_WELCOMEIMAGE_SUB_NO_MSG: '⚠ **| Escriba un mensaje valido.**',
			COMANDO_WELCOMEIMAGE_SUB_CHANNEL_NO_CANAL: '⚠ **| Escribe una id o nombre del canal.**',
			COMANDO_WELCOMEIMAGE_SUB_CHANNEL_ACTUALIZADO: (channelmention: string) => `✅ **| El canal ${channelmention} se ha establecido correctamente.**`,
			COMANDO_LEAVEIMAGE_ACTIVADO: ' ✅ **| Imagen de despedida activada.**',
			COMANDO_LEAVEIMAGE_DESACTIVADO: ' ✅ **| Imagen de despedida desactivada.**',
			COMANDO_LEAVEIMAGE_USO: (prefix: string) => [
				`**${prefix}leave_image on`,
				`${prefix}leave_image off`,
				`${prefix}leave_image channel [channelid|channelname|#channelmention]`,
				`${prefix}leave_image message [texto]`,
				`${prefix}leave_image background [imageurl|remove]`,
				`${prefix}leave_image color [circle|welcome|message|username] [#hexadecimal|random|default]**`
			],
			COMANDO_LEAVEIMAGE_SUB_COLOR_SIN_PROPIEDAD: '⚠ **| Use una de las siguientes opciones \`circle, welcome, message o username\`**',
			COMANDO_LEAVEIMAGE_SUB_COLOR_SIN_COLOR: '⚠ **| El color es requerido en hexadecimal (#ffffff o #0a2f31), use \`random\` para un color aleatorio o \`default\` para el color por defecto (blanco).**',
			COMANDO_LEAVEIMAGE_SUB_COLOR_ACTUALIZADO: '✅ **| El color ha sido actualizado correctamente.**',
			COMANDO_LEAVEIMAGE_SUB_BACKGROUND_ACTUALIZADO: '✅ ** | La imagen se actualizo correctamente.**',
			COMANDO_LEAVEIMAGE_SUB_BACKGROUND_NO_URL: '⚠ **| URL inválida.**',
			COMANDO_LEAVEIMAGE_SUB_MSG_ACTUALIZADO: '✅ **| El mensaje ha sido actualizado correctamente.**',
			COMANDO_LEAVEIMAGE_SUB_NO_MSG: '⚠ **| Escriba un mensaje valido.**',
			COMANDO_LEAVEIMAGE_SUB_CHANNEL_NO_CANAL: '⚠ **| Escribe una id o nombre del canal.**',
			COMANDO_LEAVEIMAGE_SUB_CHANNEL_ACTUALIZADO: (channelmention: string) => `✅ **| El canal ${channelmention} se ha establecido correctamente.**`


		};
	}

	public async init(): Promise<void> {
		await super.init();
	}

}
