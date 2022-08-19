using Microsoft.AspNetCore.Mvc;
using EmailService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace SendEmailWithRandomAttachments.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly IEmailSender _emailSender;
        public WeatherForecastController(IEmailSender emailSender)
        {
            _emailSender= emailSender;
        }

        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> Get()
        {
            var rng = new Random();

            var message = new Message(new string[] { "codemazetest@mailinator.com" }, "Test email async", "This is the content from our async email.", null);
            await _emailSender.SendEmailAsync(message);

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpPost]
        public async Task<IEnumerable<WeatherForecast>> Post()
        {
            var rng = new Random();

            static string RandomString(int length)
            {
                var rng = new Random();
                const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                return new string(Enumerable.Repeat(chars, length)
                    .Select(s => s[rng.Next(s.Length)]).ToArray());
            }

            var files = Request.Form.Files.Any() ? Request.Form.Files : new FormFileCollection();

            using (var stream = new MemoryStream())
            {
                using (var writer = new StreamWriter(stream))
                {
                    writer.Write("Name:" + RandomString(rng.Next(3, 20)));
                    writer.Write("Age:" + rng.Next(20, 100));
                    writer.Flush();
                    stream.Position = 0;
                    var message = new Message(new string[] { "codemazetest@mailinator.com" }, "Test mail with Attachments", "This is the content from our mail with attachments.", stream);
                    await _emailSender.SendEmailAsync(message);

                }
            }

            

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
    
