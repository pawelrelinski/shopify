import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '@modules/auth/decorators/roles.decorator';
import { Role } from '@modules/auth/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly userRoleHeaderKey = 'user-roles';

  constructor(private reflector: Reflector) {}

  public canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    let userRoles: string = context.switchToHttp().getRequest().headers[
      this.userRoleHeaderKey
    ];
    if (!userRoles) {
      return false;
    }
    return userRoles.includes('admin');
  }
}
