import db from './index'
import { useState, useEffect } from 'react';

function createTable()
{
    const [message, setMessage] = useState({status: "init", message: "Iniciando a criação das tabelas!"});
    useEffect(() => {
        function asyncTransaction(){
            db.transaction(
                ctx => {
                    ctx.executeSql("create table if not exists member( id int unique, complete_name text NOT NULL, date_of_birth text NOT NULL, contact_phone text, mail text, image text, zipcode text NOT NULL DEFAULT '78310-000', address text NOT NULL, neightborhood text NOT NULL, references_address text, city text NOT NULL DEFAULT 'Comodoro', state text NOT NULL DEFAULT 'MT', country text NOT NULL DEFAULT 'Brasil', created_at int, updated_at int, created_user int, updated_user int, churc int)")
                    ctx.executeSql('create table if not exists access (member int, privileges_m TEXT)')
                    ctx.executeSql('create table if not exists district( id int, name text, association int, shepderd int, created_at text, updated_at text, created_user int, updated_user int)')
                    ctx.executeSql("create table if not exists churc( id int not null unique, name text NOT NULL, front_image text, zipcode text NOT NULL, address text NOT NULL, neightborhood text, references_address text, city text default 'Comodoro', state text default 'MT', country text default 'Brasil', district int not null, created_at text not null, updated_at text, created_user int, updated_user int)")
                    ctx.executeSql("create table if not exists department(id int not null, name text not null)")
                    ctx.executeSql("create table if not exists currents_departments(id int not null, department text, complete_name text, member_role text, year int, churc text)")
                    ctx.executeSql("create table if not exists scale(id int primary key, scale_type text not null, churc int not null, member int, department int, visitor_member text, scale_date text not null, confirmed_by_member text not null default 'não', scale_responsible int not null, created_at text not null, updated_at text, created_user int, updated_user int, foreign key(churc) references churc(id) on delete cascade, foreign key(member) references member(id) on delete cascade, FOREIGN KEY(department) references department(id) on delete cascade, foreign key(scale_responsible) references member(id) on delete cascade, foreign key(created_user) references member(id) on delete cascade, foreign key(updated_user) references member(id) on delete cascade)")
                    ctx.executeSql("create table if not exists confirmed_scale(id int not null, scale int, theme_for_action text, confirmation_date text, confirmation_member int)")
                    ctx.executeSql("create table if not exists notification(id int primary key, scale int not null, displayed_notification text, describe_notification text, foreign key(scale) references scale(id) on delete cascade)")
                    ctx.executeSql("create table if not exists change_request(id int not null, scale INT NOT NULL, requested_member INT NOT NULL, requested_date text NOT NULL, status_requisition text, accept_date text, foreign key(scale) references scale(id) on delete cascade, foreign key(requested_member) references member(id) on delete cascade)")
                    ctx.executeSql("create table if not exists sync_database_for_online(id int primary key, table_sync text, idTable int, action_sync text, syncDatabase text, errorSync int)")
                    ctx.executeSql("create table if not exists errors_log(id int primary key, error_complete text, error_describe int, error_date text, error_member int, foreign key (error_member) references member(id))")
                },
                error =>{
                    setMessage({status: "error", message: "Erro ao criar tabelas!", erro_complete: error})
                },
                () => {
                    setMessage({status: "ok", message: "Tabelas criadas com sucesso!"})
                }
            )
        }
        asyncTransaction()
    }, [])

    return message
}

function syncDatabaseOff()
{
    
}

export default createTable;