﻿using backend.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Services
{
    public class TodoService
    {
        private readonly IMongoCollection<Todo> _todos;

        public TodoService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("MongoDB"));
            var database = client.GetDatabase("MongoDB");

            _todos = database.GetCollection<Todo>("Todos");
        }

        public List<Todo> Get()
        {
            return _todos.Find(todo => true).ToList();
        }

        public Todo Get(string id)
        {
            return _todos.Find(todo => todo.Id == id).FirstOrDefault();
        }

        public Todo Create(Todo todo )
        {
             _todos.InsertOne(todo);
            return todo;
        }

        public void Update(string id, Todo newTodo)
        {
            _todos.ReplaceOne(todo => todo.Id == id, newTodo);
        }

        public void Remove(string id)
        {
            _todos.DeleteOne(todo => todo.Id == id);
        }

        public void Remove(Todo oldTodo)
        {
            _todos.DeleteOne(todo => todo.Id == oldTodo.Id);
        }
    }
}
