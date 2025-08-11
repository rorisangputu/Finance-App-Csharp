using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Stock
{
    public class CreateStockRequestDto
    {
        [Required]
        [MaxLength(10, ErrorMessage = "Symbol cannot be over 10 characters")]
        public string Symbol { get; set; } = string.Empty;

        [Required]
        [MaxLength(150, ErrorMessage = "Company Name cannot be over 150 characters")]
        public string CompanyName { get; set; } = string.Empty;

        [Required]
        [Range(1, 1000000)]
        public decimal PurchasePrice { get; set; }

        [Required]
        [Range(0.001, 100)]
        public decimal LastDiv { get; set; }

        [Required]
        [MaxLength(250, ErrorMessage = "Industry cannot be over 250 characters")]
        public string Industry { get; set; } = string.Empty;

        [Range(1, 5000000000000)]
        public long MarketCap { get; set; }
    }
}