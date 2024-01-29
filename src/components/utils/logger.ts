// connect to external logger and expose custom functions to use for logging
interface ThirdPartyLoggerType {
	info: (message: string, extra?: object) => void;
	warn: (message: string, extra?: object) => void;
	error: (message: string, extra?: object) => void;
}

class ThirdPartyLogger implements ThirdPartyLoggerType {
	private static logger: ThirdPartyLoggerType;
	private constructor() {}
	static getLogger() {
		if (this.logger) {
			return this.logger;
		}
		// make connection and assign it to logger
		this.logger = new ThirdPartyLogger();
		return this.logger;
	}
	info(message: string, extra?: object) {
		console.info(message, extra);
	}
	warn(message: string, extra?: object) {
		console.warn(message, extra);
	}
	error(message: string, extra?: object) {
		console.error(message, extra);
	}
}

class Logger {
	private static logger: Logger;
	private static thirdPartyLogger: ThirdPartyLoggerType;
	private constructor() {}
	static getLogger() {
		if (this.logger) {
			return this.logger;
		}
		// make connection and assign it to logger
		this.thirdPartyLogger = ThirdPartyLogger.getLogger();
		this.logger = new Logger();
		return this.logger;
	}
	info(message: string, extra?: object) {
		Logger.thirdPartyLogger.info(message, extra);
	}
	warn(message: string, extra?: object) {
		Logger.thirdPartyLogger.warn(message, extra);
	}
	error(message: string, extra?: object) {
		Logger.thirdPartyLogger.error(message, extra);
	}
}

export const logger = Logger.getLogger();
