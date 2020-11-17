import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import ChaptersIndex from './cruds/Chapters'
import ChaptersSingle from './cruds/Chapters/single'
import SandisIndex from './cruds/Sandis'
import SandisSingle from './cruds/Sandis/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    ChaptersIndex,
    ChaptersSingle,
    SandisIndex,
    SandisSingle
  },
  strict: debug
})