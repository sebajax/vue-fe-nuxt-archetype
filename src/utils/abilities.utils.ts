// [IMPORTS]
import { AbilityBuilder, createMongoAbility } from '@casl/ability';
// - Interfaces
import type { MongoAbility } from '@casl/ability';
import type { Actions } from '~/interfaces/abilities/actions.interface';
import type { Subjects } from '~/interfaces/abilities/subjects.interface';

/**
 * Defines rules for the given role.
 * @param role Role set at the userStore.
 * @returns group of rules generated for the role.
 */
const defineAbilitiesFor = (role: string) => {
  type AppAbility = MongoAbility<[Actions, Subjects]>;

  const { can, cannot, build } = new AbilityBuilder<AppAbility>(
    createMongoAbility,
  );
  switch (role) {
    case 'doc':
      can('VIEW', 'TASKMODAL');
      break;
    case 'nurse':
      cannot('VIEW', 'TASKMODAL');
      break;
    case 'tens':
      can('VIEW', 'TASKMODAL');
      break;
  }
  return build();
};

export { defineAbilitiesFor };
