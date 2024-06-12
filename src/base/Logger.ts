import chalk from 'chalk';

export class Logger {
  info(content: string): void {
    this.log('INFO', content);
  }

  warn(content: string): void {
    this.log('WARN', content);
  }

  success(content: string): void {
    this.log('SUCCESS', content);
  }

  error(content: string): void {
    this.log('ERROR', content);
  }

  private log(type: string, content: string): void {
    const coloredType = this.getColorizedType(type);
    console.log(`${coloredType} ${content}`);
  }

  private getColorizedType(type: string): string {
    switch (type) {
      case 'info':
        return chalk.black.bgHex('#FF0000')('INFO');
      case 'warn':
        return chalk.black.bgHex('#FFFF00')('WARN');
      case 'success':
        return chalk.black.bgHex('#00FF00')('SUCCESS');
      case 'error':
        return chalk.black.bgHex('#FF0000')('ERROR');
      default:
        false
    }
  }
}