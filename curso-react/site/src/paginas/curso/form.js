import React, { Component } from 'react';

export class FormCurso extends Component {
    render() {
        return (
            <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulário</h3>
            <form>
            <div className="form-group row">
            <label for="codigo"
            className="col-sm-3 col-form-label">
            Código:
            </label>
            <div className="col-sm-5 col-6">
            <input type="number"
            className="form-control" id="codigo" />
            </div>
            </div>
            <div className="form-group row">
            <label for="descrição"
            className="col-sm-3 col-form-label">
            Descrição:
            </label>
            <div className="col-sm-9">
            <input type="text"
            className="form-control" id="descricao" />
            </div>
            </div>
            <div className="form-group row">
            <label for="cargaHoraria"
            className="col-sm-3 col-form-label">
            Carga Horária:</label>
            <div className="col-sm-5 col-6">
            <input type="number"
            className="form-control" id="cargaHoraria" />
            </div>
            </div>
            <div className="form-group row">
            <label for="preco"
            className="col-sm-3 col-form-label">
            Preço:</label>
            <div className="col-sm-5 col-6">
            <input type="text"
            className="form-control" id="preco" />
            </div>
            </div>
            <div className="form-group row">
            <label for="categoria"
            className="col-sm-3 col-form-label">Categoria:</label>
            <div className="col-sm-6 col-6">
            <select className="form-control" id="categoria" >
            <option>INFORMATICA</option>
            <option>ENGENHARIA</option>
            <option>ADMINISTRACAO</option>
            <option>REDES</option>
            </select>
            </div>
            </div>
            <div className="form-group row">
            <button
            className="btn btn-primary ml-3 mb-3">
            Adicionar
            </button>
            </div>
            </form>
            </div>
        )
    }
}
