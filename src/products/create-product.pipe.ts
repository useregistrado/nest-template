import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class CreateProductPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Aquí hacemos validaciones y transformaciones
    // Por ejemplo validar que venga un campo number sin letras
    // También convertir tipos de datos de string a number
    // value es el mismo body que llega en el controlador, le vamos a agregar
    // un nuevo atributo llamado expired
    const { name } = value;
    if (name == undefined) {
      throw new BadRequestException('Faltan campos'); // Esta excepcion se envia como respuesta
      // Hay mas excepciones predefinidas
      // UnauthorizedException, InternalServerError
    }
    return { ...value, expired: false };
  }
}
