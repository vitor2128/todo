using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Services;

namespace TodoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly TodoService _todoService;

        public TodoController(TodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        public ActionResult<List<Todo>> Get()
        {
            return _todoService.Get();
        }
        
        [HttpGet("{id:length(24)}", Name = "GetBook")]
        public ActionResult<List<Todo>> Get()
        {
            return _todoService.Get();
        }
    }
}
