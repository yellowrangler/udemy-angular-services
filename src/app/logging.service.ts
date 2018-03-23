export class LoggingService {
	LogStatusChange(status: string) {
		console.log('From Service: A server status changed, new status: ' + status);
	}
}