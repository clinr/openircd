/**
 * openircd, a lightweight ircd written in javascript v8 with nodejs.
 * http://www.openbrasil.org/ - rede do conhecimento livre.
 * 
 * $Id$
 */

exports.listen = {
	port: 6667,
	host: '0.0.0.0'
};

exports.server = {
	name: "main.openbrasil.org",
	description: "openbrasil main server",
};

exports.network = {
	name: "openbrasil"
};

exports.general = {
	ping_frequency: 1
};