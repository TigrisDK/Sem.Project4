using WebApi.Models;
using WebApi.Data;


namespace WebApi.Data
{
    public class AppDbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();

                if (!context.users.Any())
                {
                    context.users.AddRange(new User()
                    {
                        Email = "Jonas@mail.dk",
                        FirstName = "Jonas",
                        LastName = "Jedig",
                        PasswordHash = new byte[4] { 1, 2, 3, 4 },
                        Salt = new byte[4] { 1, 2, 3, 4 }

                    },
                    new User()
                    {
                        Email = "Jeppe@mail.dk",
                        FirstName = "Jeppe",
                        LastName = "Pape",
                        PasswordHash = new byte[4] { 1, 2, 3, 4 },
                        Salt = new byte[4] { 1, 2, 3, 4 }
                    },
                    new User()
                    {
                        Email = "Mohamed@mail.dk",
                        FirstName = "Mohamed",
                        LastName = "Abdou",
                        PasswordHash = new byte[4] { 1, 2, 3, 4 },
                        Salt = new byte[4] { 1, 2, 3, 4 }
                    },
                    new User()
                    {
                        Email = "Mads@mail.dk",
                        FirstName = "Mads",
                        LastName = "Stavnsbo",
                        PasswordHash = new byte[4] { 1, 2, 3, 4 },
                        Salt = new byte[4] { 1, 2, 3, 4 }
                    },
                    new User()
                    {
                        Email = "Alan@mail.dk",
                        FirstName = "Alan",
                        LastName = "Khamo",
                        PasswordHash = new byte[4] { 1, 2, 3, 4 },
                        Salt = new byte[4] { 1, 2, 3, 4 }
                    },
                    new User()
                    {
                        Email = "Sean@mail.dk",
                        FirstName = "Sean",
                        LastName = "Bateman",
                        PasswordHash = new byte[4] { 1, 2, 3, 4 },
                        Salt = new byte[4] { 1, 2, 3, 4 }
                    },
                    new User()
                    {
                        Email = "Kasper@mail.dk",
                        FirstName = "Kasper",
                        LastName = "Martensen",
                        PasswordHash = new byte[4] { 1, 2, 3, 4 },
                        Salt = new byte[4] { 1, 2, 3, 4 }
                    });
                    context.SaveChanges();
                }

                if(!context.traningPrograms.Any())
                {
                    var trainingPrograms = new List<TraningPrograms>()
                    {
                        new TraningPrograms() { Name = "Program 1" },
                        new TraningPrograms() { Name = "Chest" },
                        new TraningPrograms() { Name = "Legs" },
                        new TraningPrograms() { Name = "Back" },
                        new TraningPrograms() { Name = "Shoulders" },
                        new TraningPrograms() { Name = "Full Body" }
                    };

                    context.traningPrograms.AddRange(trainingPrograms);
                    context.SaveChanges();
                }

            }
        }
    }
}
